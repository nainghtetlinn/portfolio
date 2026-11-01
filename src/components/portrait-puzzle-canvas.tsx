"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ArcballControls } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

/* ====================================================================== */
/*  Constants                                                             */
/* ====================================================================== */

const SOLVED_DISTANCE = 10;
const SOLVED_POS = new THREE.Vector3(0, 0, SOLVED_DISTANCE);
const SNAP_THRESHOLD = 0.035; // radians (~2°)
const SOLVE_DURATION = 0.65; // seconds
const MIN_SCRAMBLE_ANGLE = (60 * Math.PI) / 180; // 60° in radians

/* ====================================================================== */
/*  Public types                                                          */
/* ====================================================================== */

export interface PortraitPuzzleCanvasProps {
  onSolved?: () => void;
  onFirstInteract?: () => void;
  onAlignmentChange?: (percent: number) => void;
  className?: string;
}

export interface PortraitPuzzleCanvasHandle {
  solveNow: () => void;
  scrambleAgain: () => void;
}

/* ====================================================================== */
/*  Pure helpers (module-scope, no React)                                 */
/* ====================================================================== */

type Phase = "scattered" | "solving" | "solved" | "scrambling";

interface SvgClassStyle {
  fill?: string;
  fillOpacity?: string;
  opacity?: string;
  display?: string;
}

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

const _nA = new THREE.Vector3();
const _nB = new THREE.Vector3();
const _ortho = new THREE.Vector3();

function slerpOnSphere(
  from: THREE.Vector3,
  to: THREE.Vector3,
  t: number,
  radius: number,
  out: THREE.Vector3,
): THREE.Vector3 {
  _nA.copy(from).normalize();
  _nB.copy(to).normalize();
  const dot = THREE.MathUtils.clamp(_nA.dot(_nB), -1, 1);

  if (dot < -0.999999) {
    _ortho.set(Math.abs(_nA.x) < 0.9 ? 1 : 0, Math.abs(_nA.x) < 0.9 ? 0 : 1, 0);
    _ortho.crossVectors(_nA, _ortho).normalize();
    const angle = t * Math.PI;
    return out
      .copy(_nA)
      .multiplyScalar(Math.cos(angle))
      .addScaledVector(_ortho, Math.sin(angle))
      .multiplyScalar(radius);
  }

  const omega = Math.acos(dot);
  if (omega < 1e-6) {
    return out.copy(from).lerp(to, t);
  }

  const sinOmega = Math.sin(omega);
  const sa = Math.sin((1 - t) * omega) / sinOmega;
  const sb = Math.sin(t * omega) / sinOmega;
  out.set(
    sa * _nA.x + sb * _nB.x,
    sa * _nA.y + sb * _nB.y,
    sa * _nA.z + sb * _nB.z,
  );
  return out.multiplyScalar(radius);
}

function randomScrambledPosition(): THREE.Vector3 {
  const sph = new THREE.Spherical();
  const pos = new THREE.Vector3();

  for (let i = 0; i < 100; i++) {
    let phi = Math.acos(2 * Math.random() - 1);
    phi = Math.max(0.1, Math.min(Math.PI - 0.1, phi));
    const theta = Math.random() * 2 * Math.PI;
    sph.set(SOLVED_DISTANCE, phi, theta);
    pos.setFromSpherical(sph);
    if (pos.angleTo(SOLVED_POS) >= MIN_SCRAMBLE_ANGLE) return pos;
  }

  sph.set(SOLVED_DISTANCE, Math.PI / 2, Math.PI);
  return pos.setFromSpherical(sph);
}

function generateScatteredDepths(triCount: number): Float32Array<ArrayBuffer> {
  const depths = new Float32Array(triCount);
  for (let i = 0; i < triCount; i++) {
    depths[i] = (Math.random() - 0.5) * 9;
  }
  return depths;
}

function updateBillboardPositions(
  outPositions: Float32Array,
  triCenterX: Float32Array,
  triCenterY: Float32Array,
  triOffsets: Float32Array,
  depths: Float32Array,
  camera: THREE.Camera,
  alignmentFactor: number, // 0 = fully scrambled, 1 = perfectly aligned
): void {
  camera.updateMatrixWorld();
  const me = camera.matrixWorld.elements;

  const rx = me[0],
    ry = me[1],
    rz = me[2];
  const ux = me[4],
    uy = me[5],
    uz = me[6];

  const triCount = depths.length;
  const invSolvedDist = 1 / SOLVED_DISTANCE;

  // Use a cubic ease-in curve so the pieces stay close to their original sizes
  // until the user gets very close to the solved angle.
  const scaleLerp = alignmentFactor * alignmentFactor * alignmentFactor;

  for (let tri = 0; tri < triCount; tri++) {
    const z = depths[tri];
    const targetScale = (SOLVED_DISTANCE - z) * invSolvedDist;

    // Interpolate between original scale (1.0) and the forced-perspective scale
    const pScale = 1.0 + (targetScale - 1.0) * scaleLerp;

    const cx = triCenterX[tri] * pScale;
    const cy = triCenterY[tri] * pScale;

    const offBase = tri * 6;
    const posBase = tri * 9;

    const ox0 = triOffsets[offBase] * pScale;
    const oy0 = triOffsets[offBase + 1] * pScale;
    outPositions[posBase] = cx + ox0 * rx + oy0 * ux;
    outPositions[posBase + 1] = cy + ox0 * ry + oy0 * uy;
    outPositions[posBase + 2] = z + ox0 * rz + oy0 * uz;

    const ox1 = triOffsets[offBase + 2] * pScale;
    const oy1 = triOffsets[offBase + 3] * pScale;
    outPositions[posBase + 3] = cx + ox1 * rx + oy1 * ux;
    outPositions[posBase + 4] = cy + ox1 * ry + oy1 * uy;
    outPositions[posBase + 5] = z + ox1 * rz + oy1 * uz;

    const ox2 = triOffsets[offBase + 4] * pScale;
    const oy2 = triOffsets[offBase + 5] * pScale;
    outPositions[posBase + 6] = cx + ox2 * rx + oy2 * ux;
    outPositions[posBase + 7] = cy + ox2 * ry + oy2 * uy;
    outPositions[posBase + 8] = z + ox2 * rz + oy2 * uz;
  }
}

/* ====================================================================== */
/*  Custom Hook: Data Fetching & Processing                               */
/* ====================================================================== */

interface PuzzleGeometryData {
  flatPos: Float32Array;
  triCenterX: Float32Array;
  triCenterY: Float32Array;
  triOffsets: Float32Array;
  currentDepths: Float32Array;
  initialPositions: Float32Array;
  colors: Float32Array;
}

function usePuzzleData(url: string, initialCameraPos: THREE.Vector3) {
  const geoRef = useRef<PuzzleGeometryData | null>(null);
  const [geoData, setGeoData] = useState<PuzzleGeometryData | null>(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

    (async () => {
      let svgText: string;
      try {
        const res = await fetch(url, { signal: abortCtrl.signal });
        if (!res.ok) return;
        svgText = await res.text();
      } catch {
        return;
      }
      if (abortCtrl.signal.aborted) return;

      const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
      const svgEl = doc.documentElement;

      const styleTags = svgEl.querySelectorAll("style");
      const classStyles = new Map<string, SvgClassStyle>();

      styleTags.forEach((tag) => {
        const css = (tag.textContent ?? "").replace(/\/\*[\s\S]*?\*\//g, "");
        const blockRe = /([^{}]+)\{([^}]*)\}/g;
        let block: RegExpExecArray | null;

        while ((block = blockRe.exec(css)) !== null) {
          const selectors = block[1];
          const body = block[2];

          const fillMatch = /(?:^|;|\s)fill\s*:\s*([^;!}]+)/i.exec(body);
          const fillOpacityMatch =
            /(?:^|;|\s)fill-opacity\s*:\s*([^;!}]+)/i.exec(body);
          const opacityMatch = /(?:^|;|\s)opacity\s*:\s*([^;!}]+)/i.exec(body);
          const displayMatch = /(?:^|;|\s)display\s*:\s*([^;!}]+)/i.exec(body);

          const classRe = /\.([\w-]+)/g;
          let clsMatch: RegExpExecArray | null;
          while ((clsMatch = classRe.exec(selectors)) !== null) {
            const clsName = clsMatch[1];
            const prev = classStyles.get(clsName) ?? {};
            if (fillMatch) prev.fill = fillMatch[1].trim();
            if (fillOpacityMatch) prev.fillOpacity = fillOpacityMatch[1].trim();
            if (opacityMatch) prev.opacity = opacityMatch[1].trim();
            if (displayMatch) prev.display = displayMatch[1].trim();
            classStyles.set(clsName, prev);
          }
        }
      });

      svgEl.querySelectorAll("[class]").forEach((el) => {
        const clsAttr = el.getAttribute("class");
        if (!clsAttr) return;

        const merged: SvgClassStyle = {};
        for (const name of clsAttr.trim().split(/\s+/)) {
          const s = classStyles.get(name);
          if (!s) continue;
          if (s.fill !== undefined) merged.fill = s.fill;
          if (s.fillOpacity !== undefined) merged.fillOpacity = s.fillOpacity;
          if (s.opacity !== undefined) merged.opacity = s.opacity;
          if (s.display !== undefined) merged.display = s.display;
        }

        if (merged.fill && !el.hasAttribute("fill"))
          el.setAttribute("fill", merged.fill);
        if (merged.fillOpacity && !el.hasAttribute("fill-opacity"))
          el.setAttribute("fill-opacity", merged.fillOpacity);
        if (merged.opacity && !el.hasAttribute("opacity"))
          el.setAttribute("opacity", merged.opacity);
        if (merged.display && !el.hasAttribute("display"))
          el.setAttribute("display", merged.display);
      });

      svgEl.querySelectorAll('[display="none"]').forEach((el) => el.remove());

      const processedSvg = new XMLSerializer().serializeToString(svgEl);
      const loader = new SVGLoader();
      const svgData = loader.parse(processedSvg);
      if (abortCtrl.signal.aborted) return;

      const rawPositions: number[] = [];
      const colorsArr: number[] = [];
      let minX = Infinity,
        maxX = -Infinity,
        minY = Infinity,
        maxY = -Infinity;

      const pushVertex = (x: number, y: number, fillColor: THREE.Color) => {
        rawPositions.push(x, y, 0);
        colorsArr.push(fillColor.r, fillColor.g, fillColor.b);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      };

      for (const path of svgData.paths) {
        const fillColor = path.color;
        const style = path.userData?.["style"] as
          Record<string, unknown> | undefined;

        if (
          style?.["fill"] === "none" ||
          style?.["visibility"] === "hidden" ||
          style?.["display"] === "none" ||
          Number(style?.["fillOpacity"]) === 0 ||
          Number(style?.["opacity"]) === 0
        )
          continue;

        const shapes = path.toShapes();

        for (const shape of shapes) {
          const shapeGeo = new THREE.ShapeGeometry(shape);
          const posAttr = shapeGeo.getAttribute("position");
          const indexAttr = shapeGeo.getIndex();

          if (indexAttr) {
            for (let i = 0; i < indexAttr.count; i++) {
              const vi = indexAttr.getX(i);
              pushVertex(posAttr.getX(vi), posAttr.getY(vi), fillColor);
            }
          } else {
            for (let i = 0; i < posAttr.count; i++) {
              pushVertex(posAttr.getX(i), posAttr.getY(i), fillColor);
            }
          }
          shapeGeo.dispose();
        }
      }

      if (rawPositions.length === 0 || abortCtrl.signal.aborted) return;

      const bboxCx = (minX + maxX) / 2;
      const bboxCy = (minY + maxY) / 2;
      const rangeX = maxX - minX;
      const rangeY = maxY - minY;
      const scale = 6.5 / Math.max(rangeX, rangeY);

      const centeredPositions = new Float32Array(rawPositions.length);
      for (let i = 0; i < rawPositions.length; i += 3) {
        centeredPositions[i] = (rawPositions[i] - bboxCx) * scale;
        centeredPositions[i + 1] = -(rawPositions[i + 1] - bboxCy) * scale;
        centeredPositions[i + 2] = 0;
      }

      const vertexCount = centeredPositions.length / 3;
      const triangleCount = Math.floor(vertexCount / 3);
      const flat = new Float32Array(triangleCount * 9);
      const cX = new Float32Array(triangleCount);
      const cY = new Float32Array(triangleCount);
      const offsets = new Float32Array(triangleCount * 6);

      const BLEED = 1.003;

      for (let tri = 0; tri < triangleCount; tri++) {
        const base = tri * 9;
        const offBase = tri * 6;

        const x0 = centeredPositions[base],
          y0 = centeredPositions[base + 1];
        const x1 = centeredPositions[base + 3],
          y1 = centeredPositions[base + 4];
        const x2 = centeredPositions[base + 6],
          y2 = centeredPositions[base + 7];

        const cx = (x0 + x1 + x2) / 3;
        const cy = (y0 + y1 + y2) / 3;
        cX[tri] = cx;
        cY[tri] = cy;

        for (let v = 0; v < 3; v++) {
          const idx = base + v * 3;
          const ox = (centeredPositions[idx] - cx) * BLEED;
          const oy = (centeredPositions[idx + 1] - cy) * BLEED;

          offsets[offBase + v * 2] = ox;
          offsets[offBase + v * 2 + 1] = oy;

          flat[idx] = cx + ox;
          flat[idx + 1] = cy + oy;
          flat[idx + 2] = 0;
        }
      }

      const currentDepths = generateScatteredDepths(triangleCount);
      const initialPositions = new Float32Array(triangleCount * 9);

      const tempCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      tempCamera.position.copy(initialCameraPos);
      tempCamera.lookAt(0, 0, 0);

      // Determine initial alignment factor
      const initialAngle = initialCameraPos.angleTo(SOLVED_POS);
      const initialAlignment = Math.max(0, 1 - initialAngle / Math.PI);

      updateBillboardPositions(
        initialPositions,
        cX,
        cY,
        offsets,
        currentDepths,
        tempCamera,
        initialAlignment,
      );

      if (abortCtrl.signal.aborted) return;

      const data = {
        flatPos: flat,
        triCenterX: cX,
        triCenterY: cY,
        triOffsets: offsets,
        currentDepths,
        initialPositions,
        colors: new Float32Array(colorsArr.slice(0, triangleCount * 9)),
      };

      geoRef.current = data;
      setGeoData(data);
    })();

    return () => abortCtrl.abort();
  }, [url, initialCameraPos]);

  return { geoData, geoRef };
}

/* ====================================================================== */
/*  Inner Scene Component (R3F Context)                                   */
/* ====================================================================== */

interface InnerSceneProps extends Omit<PortraitPuzzleCanvasProps, "className"> {
  startPos: THREE.Vector3;
  setHasInteracted: (val: boolean) => void;
  hasInteracted: boolean;
}

const PuzzleScene = forwardRef<PortraitPuzzleCanvasHandle, InnerSceneProps>(
  function PuzzleScene(props, ref) {
    const { onSolved, onAlignmentChange, startPos, hasInteracted } = props;

    const camera = useThree((s) => s.camera);
    const meshRef = useRef<THREE.Mesh>(null);
    const [controlsEnabled, setControlsEnabled] = useState(true);

    const { geoData, geoRef } = usePuzzleData("/game.svg", startPos);

    const puzzle = useRef({
      phase: "scattered" as Phase,
      animStart: 0,
      animFromDepths: new Float32Array(0),
      animToDepths: new Float32Array(0),
      cameraFrom: new THREE.Vector3(),
      cameraTo: new THREE.Vector3(),
      cameraUpFrom: new THREE.Vector3(),
      lastPercent: -1,
      lastCamPos: new THREE.Vector3().copy(startPos),
    });

    const startSolve = () => {
      const geoData = geoRef.current;
      if (!geoData) return;
      if (
        puzzle.current.phase === "solving" ||
        puzzle.current.phase === "solved"
      )
        return;

      puzzle.current.phase = "solving";
      puzzle.current.animStart = performance.now();
      puzzle.current.animFromDepths = new Float32Array(geoData.currentDepths);
      puzzle.current.animToDepths = new Float32Array(
        geoData.currentDepths.length,
      );
      puzzle.current.cameraFrom.copy(camera.position);
      puzzle.current.cameraTo.copy(SOLVED_POS);
      puzzle.current.cameraUpFrom.copy(camera.up);

      setControlsEnabled(false);
    };

    const startScramble = () => {
      const geoData = geoRef.current;
      if (!geoData) return;
      if (puzzle.current.phase !== "solved") return;

      puzzle.current.phase = "scrambling";
      puzzle.current.animStart = performance.now();
      puzzle.current.animFromDepths = new Float32Array(
        geoData.currentDepths.length,
      );
      puzzle.current.animToDepths = generateScatteredDepths(
        geoData.currentDepths.length,
      );
      puzzle.current.cameraFrom.copy(camera.position);
      puzzle.current.cameraTo.copy(randomScrambledPosition());
      puzzle.current.cameraUpFrom.copy(camera.up);
    };

    useImperativeHandle(ref, () => ({
      solveNow: startSolve,
      scrambleAgain: startScramble,
    }));

    useFrame(() => {
      const geoData = geoRef.current;
      if (!geoData || !meshRef.current) return;

      const posAttr = meshRef.current.geometry.getAttribute("position");
      const arr = posAttr.array as Float32Array;
      const pz = puzzle.current;

      if (pz.phase === "scattered") {
        if (pz.lastCamPos.distanceToSquared(camera.position) > 1e-10) {
          pz.lastCamPos.copy(camera.position);

          const angle = camera.position.angleTo(SOLVED_POS);
          const alignmentFactor = Math.max(0, 1 - angle / Math.PI);

          updateBillboardPositions(
            arr,
            geoData.triCenterX,
            geoData.triCenterY,
            geoData.triOffsets,
            geoData.currentDepths,
            camera,
            alignmentFactor,
          );
          posAttr.needsUpdate = true;
        }

        const angle = camera.position.angleTo(SOLVED_POS);
        const pct = Math.round(Math.max(0, 1 - angle / Math.PI) * 100);
        if (pct !== pz.lastPercent) {
          pz.lastPercent = pct;
          onAlignmentChange?.(pct);
        }

        if (angle < SNAP_THRESHOLD) {
          startSolve();
        }
      } else if (pz.phase === "solving" || pz.phase === "scrambling") {
        const elapsed = (performance.now() - pz.animStart) / 1000;
        const rawT = Math.min(1, elapsed / SOLVE_DURATION);
        const t = easeOutCubic(rawT);

        slerpOnSphere(
          pz.cameraFrom,
          pz.cameraTo,
          t,
          SOLVED_DISTANCE,
          camera.position,
        );

        camera.up
          .copy(pz.cameraUpFrom)
          .lerp(new THREE.Vector3(0, 1, 0), t)
          .normalize();

        camera.lookAt(0, 0, 0);

        const fromD = pz.animFromDepths;
        const toD = pz.animToDepths;
        for (let i = 0; i < geoData.currentDepths.length; i++) {
          geoData.currentDepths[i] = fromD[i] + (toD[i] - fromD[i]) * t;
        }

        const angle = camera.position.angleTo(SOLVED_POS);
        const alignmentFactor = Math.max(0, 1 - angle / Math.PI);

        updateBillboardPositions(
          arr,
          geoData.triCenterX,
          geoData.triCenterY,
          geoData.triOffsets,
          geoData.currentDepths,
          camera,
          alignmentFactor,
        );
        posAttr.needsUpdate = true;

        if (rawT >= 1) {
          if (pz.phase === "solving") {
            geoData.currentDepths.fill(0);
            camera.position.copy(SOLVED_POS);
            camera.up.set(0, 1, 0);
            camera.lookAt(0, 0, 0);
            arr.set(geoData.flatPos);
            posAttr.needsUpdate = true;

            pz.phase = "solved";
            pz.lastPercent = 100;
            onAlignmentChange?.(100);
            onSolved?.();
          } else {
            geoData.currentDepths.set(pz.animToDepths);
            camera.position.copy(pz.cameraTo);
            camera.up.set(0, 1, 0);
            camera.lookAt(0, 0, 0);

            const finalAngle = camera.position.angleTo(SOLVED_POS);
            const finalAlignment = Math.max(0, 1 - finalAngle / Math.PI);

            updateBillboardPositions(
              arr,
              geoData.triCenterX,
              geoData.triCenterY,
              geoData.triOffsets,
              geoData.currentDepths,
              camera,
              finalAlignment,
            );
            posAttr.needsUpdate = true;
            pz.lastCamPos.copy(camera.position);

            pz.phase = "scattered";
            pz.lastPercent = -1;

            setControlsEnabled(true);
          }
        }
      }
    });

    if (!geoData) return null;

    return (
      <>
        <mesh ref={meshRef} frustumCulled={false}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[geoData.initialPositions, 3]}
              usage={THREE.DynamicDrawUsage}
            />
            <bufferAttribute
              attach="attributes-color"
              args={[geoData.colors, 3]}
            />
          </bufferGeometry>
          <meshBasicMaterial vertexColors side={THREE.DoubleSide} />
        </mesh>
        <ArcballControls
          enabled={controlsEnabled}
          enableZoom={false}
          enablePan={false}
          enableAnimations={true} // equivalent behavior to enableDamping
          dampingFactor={0.06}
          target={[0, 0, 0]}
        />
      </>
    );
  },
);

/* ====================================================================== */
/*  Main Wrapper Component                                                */
/* ====================================================================== */

export const PortraitPuzzleCanvas = forwardRef<
  PortraitPuzzleCanvasHandle,
  PortraitPuzzleCanvasProps
>(function PortraitPuzzleCanvas(props, ref) {
  const { onSolved, onFirstInteract, onAlignmentChange, className } = props;

  const innerHandleRef = useRef<PortraitPuzzleCanvasHandle>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const startPos = useMemo(() => randomScrambledPosition(), []);

  useImperativeHandle(ref, () => ({
    solveNow: () => innerHandleRef.current?.solveNow(),
    scrambleAgain: () => innerHandleRef.current?.scrambleAgain(),
  }));

  const handlePointerDown = () => {
    if (hasInteracted) return;
    setHasInteracted(true);
    onFirstInteract?.();
  };

  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: startPos, fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        onPointerDown={handlePointerDown}
      >
        <PuzzleScene
          ref={innerHandleRef}
          startPos={startPos}
          onSolved={onSolved}
          onAlignmentChange={onAlignmentChange}
          hasInteracted={hasInteracted}
          setHasInteracted={setHasInteracted}
        />
      </Canvas>
    </div>
  );
});
