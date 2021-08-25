import Meta from "./Meta";
import Header from "./Header";
import layoutModule from "../styles/Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode | JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Meta />
      <main className={layoutModule.main}>{children}</main>
    </>
  );
};

export default Layout;
