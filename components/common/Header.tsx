import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className={navStyles.nav}>
      <Link href="/">My Movie Collection</Link>
      <SearchBar placeholder="Search movie by title..." inputWidth="280px" />
    </header>
  );
};

export default Header;
