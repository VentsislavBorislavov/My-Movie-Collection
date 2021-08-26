import SearchBar from "../../components/SearchBar";
import searchStyles from "../../styles/Movies.module.scss";
import MovieList from "../../components/MovieList";
import Meta from "../../components/Meta";

const movies = () => {
  return (
    <section className={searchStyles.search}>
      <Meta title="Search | My Movie Collection" />
      <h1>Search</h1>
      <SearchBar placeholder="Search movie by title..." inputWidth="400px" />
      <MovieList />
    </section>
  );
};

export default movies;
