import navStyles from "../../styles/Nav.module.scss";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/slices/searchSlice";

const Header = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();

  const onSearch = () => {
    if (search) dispatch(setSearchText(search));
    router.push("/movies");
    setSearch("");
  };

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
        onClear={() => setSearch("")}
      />
    </header>
  );
};

export default Header;
