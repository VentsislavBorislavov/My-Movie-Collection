import searchBarStyles from "../../styles/SearchBar.module.scss";

interface SearchBarPropType {
  placeholder: string;
  inputWidth: string;
  value: string;
  onChange: any;
  onSearch: any;
}

const SearchBar = ({
  placeholder,
  inputWidth,
  onChange,
  value,
  onSearch,
}: SearchBarPropType) => {
  return (
    <div className={searchBarStyles.searchBar}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        name="nav-search-bar"
        id="nav-search-bar"
        placeholder={placeholder}
        style={{ width: inputWidth }}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
