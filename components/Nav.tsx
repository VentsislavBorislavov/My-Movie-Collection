import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/">My Movie Collection</Link>
      <div className={navStyles.navSearch}>
        <input
          type="text"
          name="nav-search-bar"
          id="nav-search-bar"
          placeholder="Search by movie title..."
        />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Nav;
