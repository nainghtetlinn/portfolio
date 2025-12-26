import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).default("nodejs"),

  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
    NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
    NEXT_PUBLIC_AVAILABLE_STATUS: z.coerce.boolean(),
  },

  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    NEXT_PUBLIC_AVAILABLE_STATUS: process.env.NEXT_PUBLIC_AVAILABLE_STATUS,
  },

  emptyStringAsUndefined: true,
});

export default env;
