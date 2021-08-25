import MovieListItem from "./MovieListItem";
import testPoster from "../public/BlackWidow2.jpg";
import movieStyles from "../styles/Movies.module.scss";

const MovieList = () => {
  const testArr = Array(4).fill(null);
  const { title, year, genres, length, description, link, isFavorite, poster } =
    moviePlaceholeder;
  return (
    <div className={movieStyles.movieList}>
      {testArr.map((item, idx) => (
        <MovieListItem
          title={title}
          year={year}
          genres={genres}
          lenghtInMin={length}
          description={description}
          link={link}
          isFavorite={isFavorite}
          poster={poster}
          movieId={idx}
        />
      ))}
    </div>
  );
};

const moviePlaceholeder = {
  title: "Movie Title",
  year: 2021,
  genres: ["Drama, Thriller, Commedy"],
  length: 90,
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, voluptatibus deleniti id animi maiores quidem ipsam necessitatibus aspernatur quam reiciendis temporibus incidunt officia labore laborum libero omnis perspiciatis quia, ratione dolorem? Aut sunt perferendis nemo, maiores dignissimos ipsum et commodi consectetur neque alias blanditiis asperiores rem omnis? Deleniti cupiditate laborum soluta, reprehenderit debitis doloribus sapiente. Accusamus eveniet labore magni saepe.",
  link: "/",
  isFavorite: true,
  poster: testPoster.src,
};

export default MovieList;
