import Meta from "./Meta";

interface LayoutProps {
  children: React.ReactNode | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};

export default Layout;
