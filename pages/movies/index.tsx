import React, { useEffect } from "react";
import searchStyles from "../../styles/MovieSearch.module.scss";
import { setSearchText } from "../../redux/slices/searchSlice";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setMovies } from "../../redux/slices/moviesSlice";
import Meta from "../../components/common/Meta";
import SearchBar from "../../components/common/SearchBar";
import MovieList from "../../components/moviepages/MovieList";

const movies = () => {
  const { current, previous } = useSelector(
    (state: RootStateOrAny) => state.search
  );
  const dispatch = useDispatch();
  const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };
  const onSearch = async () => {
    if (!current || current === previous) return;
    try {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${current}`
      );
      const data = await res.json();
      dispatch(setMovies(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <section className={searchStyles.search}>
      <Meta title="Search | My Movie Collection" />
      <h1>Search</h1>
      <SearchBar
        value={current}
        onChange={setSearch}
        onSearch={onSearch}
        placeholder="Search movie by title..."
        inputWidth="400px"
        onClear={() => {
          dispatch(setSearchText(""));
        }}
      />
      <MovieList />
    </section>
  );
};

export default movies;
