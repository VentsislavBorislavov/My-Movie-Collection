import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState<string>("");

  const onSearch = () => {};

  return (
    <header className={navStyles.nav}>
      <Link href="/">My Movie Collection</Link>
      <SearchBar
        onSearch={onSearch}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        value={search}
        placeholder="Search movie by title..."
        inputWidth="280px"
        onClearInput={() => setSearch("")}
      />
    </header>
  );
};

export default Header;
