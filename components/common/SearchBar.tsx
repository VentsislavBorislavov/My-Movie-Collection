import searchBarStyles from "../../styles/SearchBar.module.scss";
import clearImg from "../../public/clear.png";
import searchImg from "../../public/search-icon.png";

interface SearchBarPropType {
  placeholder: string;
  inputWidth: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSearch(): void;
  onClear(): void;
}

const SearchBar = ({
  placeholder,
  inputWidth,
  onChange,
  value,
  onSearch,
  onClear,
}: SearchBarPropType) => {
  const onPressEnter = (e: any) => {
    if (e.code === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={searchBarStyles.searchBar}>
      <div className={searchBarStyles.inputField}>
        <input
          value={value}
          onChange={onChange}
          onKeyDown={onPressEnter}
          type="text"
          name="nav-search-bar"
          id="nav-search-bar"
          placeholder={placeholder}
          style={{ width: inputWidth }}
        />
        <button className={searchBarStyles.clearInput} onClick={onClear}>
          <img src={clearImg.src} alt="clear search" />
        </button>
      </div>
      <button className={searchBarStyles.searchButton} onClick={onSearch}>
        <img src={searchImg.src} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
