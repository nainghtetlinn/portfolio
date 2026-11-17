import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/components/navbar").then((m) => ({ default: m.Navbar })),
  { loading: () => <div className="h-20" /> },
);

const Footer = dynamic(
  () => import("@/components/footer").then((m) => ({ default: m.Footer })),
  { loading: () => <div className="h-24" /> },
);

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
