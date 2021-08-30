import MovieListItem from "./MovieListItem";
import movieStyles from "../../styles/MovieSearch.module.scss";
import { useSelector, RootStateOrAny } from "react-redux";
import { Movie } from "../../interfaces";
import { useEffect } from "react";

const MovieList = () => {
  const movies: Movie[] | [] = useSelector(
    (state: RootStateOrAny) => state.movies
  );

  return (
    <div className={movieStyles.movieList}>
      {movies.length > 0 &&
        movies.map((movie: Movie) => (
          <MovieListItem movie={movie} key={movie.id} isFavorite />
        ))}
    </div>
  );
};

export default MovieList;
