import searchBarStyles from "../styles/SearchBar.module.scss";

interface SearchBarPropType {
  placeholder: string;
  inputWidth: string;
}

const SearchBar = ({ placeholder, inputWidth }: SearchBarPropType) => {
  return (
    <div className={searchBarStyles.searchBar}>
      <input
        type="text"
        name="nav-search-bar"
        id="nav-search-bar"
        placeholder={placeholder}
        style={{ width: inputWidth }}
      />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
