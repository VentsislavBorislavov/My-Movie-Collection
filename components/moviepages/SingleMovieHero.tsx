import colors from "../../colors";
import movieStyles from "../../styles/Movie.module.scss";
import Button from "../common/Button";
import testImage from "../../public/BlackWidow2.jpg";
import { useState } from "react";
import { ExtendedMovie, Movie } from "../../interfaces";
import movie from "../../pages/movies/[id]";

// TODO rename every object from year to date
// TODO extract the year of every date obj with function getYear
// TODO create function that checks if images is not null

const SingleMovieHero = ({
  title,
  year,
  duration,
  genres,
  isFavorite,
  images,
}: ExtendedMovie) => {
  const [inFavorites, setIsInFavorites] = useState<boolean>(isFavorite);
  return (
    <div
      style={headStyle(images!.original)}
      className={movieStyles.movieHeader}
    >
      <h1>{title}</h1>
      <h2>{year}</h2>
      <p className={movieStyles.genres}>
        {genres!.join(", ")} | {duration} min/ep
      </p>
      <Button color={inFavorites ? colors.lightRed : colors.lightGreen}>
        {inFavorites ? "Remove From Favorites" : "Add To Favorites"}
      </Button>
    </div>
  );
};

const headStyle = (imgSrc: string): React.CSSProperties => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imgSrc})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 35%",
  minHeight: 300,
});

export default SingleMovieHero;
