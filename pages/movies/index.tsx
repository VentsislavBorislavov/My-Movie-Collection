import SearchBar from "../../components/common/SearchBar";
import searchStyles from "../../styles/Movies.module.scss";
import MovieList from "../../components/moviepages/MovieList";
import Meta from "../../components/common/Meta";

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
