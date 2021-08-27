import React from "react";
import searchStyles from "../../styles/Movies.module.scss";
import { setMovieSearchQuery } from "../../redux/slices/searchSlice";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { setMovies } from "../../redux/slices/moviesSlice";
import Meta from "../../components/common/Meta";
import SearchBar from "../../components/common/SearchBar";
import MovieList from "../../components/moviepages/MovieList";

const movies = () => {
  const searchQuery = useSelector((state: RootStateOrAny) => state.search);
  const dispatch = useDispatch();
  const setSearch = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setMovieSearchQuery(e.target.value));
  };
  const onSearch = async () => {
    if (!searchQuery) return;
    try {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchQuery}`
      );
      const data = await res.json();
      dispatch(setMovies(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={searchStyles.search}>
      <Meta title="Search | My Movie Collection" />
      <h1>Search</h1>
      <SearchBar
        value={searchQuery}
        onChange={setSearch}
        onSearch={onSearch}
        placeholder="Search movie by title..."
        inputWidth="400px"
      />
      <MovieList />
    </section>
  );
};

export default movies;
