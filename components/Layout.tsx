import Meta from "./Meta";
import Nav from "./Nav";
import layoutModule from "../styles/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Nav />
      <Meta />
      <main className={layoutModule.main}>{children}</main>
    </>
  );
};

export default Layout;
