import searchBarStyles from "../../styles/SearchBar.module.scss";
import { KeyboardEventHandler, useEffect, useRef, useState } from "react";

interface SearchBarPropType {
  placeholder: string;
  inputWidth: string;
  value: string;
  onChange: any;
  onSearch: any;
}
// TODO search bar has to have cross button that clears the input field

const SearchBar = ({
  placeholder,
  inputWidth,
  onChange,
  value,
  onSearch,
}: SearchBarPropType) => {
  const onPressEnter = (e: any) => {
    if (e.code === "Enter") {
      onSearch();
    }
  };

  return (
    <div className={searchBarStyles.searchBar}>
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
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
