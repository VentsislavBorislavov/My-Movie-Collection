import SearchBar from "../../components/SearchBar";
import searchStyles from "../../styles/Movies.module.scss";
import MovieList from "../../components/MovieList";

const movies = () => {
  return (
    <section className={searchStyles.search}>
      <h1>Search</h1>
      <SearchBar placeholder="Search movie by title..." inputWidth="400px" />
      <MovieList />
    </section>
  );
};

export default movies;
