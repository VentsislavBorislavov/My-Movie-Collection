import colors from "../../colors";
import movieStyles from "../../styles/Movie.module.scss";
import Button from "../common/Button";
import { useState } from "react";
import { ExtendedMovie, Image } from "../../interfaces";
import { fetchFavorite } from "./MovieListItem";
import imageNotFound from "../../public/image-not-found.jpg";

// TODO extract the year of every date obj with function getYear
// TODO create function that checks if images is not null

const SingleMovieHero = ({
  title,
  year,
  duration,
  genres,
  isFavorite,
  images,
  id,
}: ExtendedMovie) => {
  const [inFavorites, setIsInFavorites] = useState<boolean | undefined>(
    isFavorite
  );

  const handleFavoriteClick = () => {
    fetchFavorite(id, inFavorites, images?.medium, title, year);
    setIsInFavorites(!inFavorites);
  };

  return (
    <div style={bannerStyle(images)} className={movieStyles.movieHeader}>
      <h1>{title}</h1>
      <h2>{year}</h2>
      <p className={movieStyles.genres}>
        {genres!.join(", ")} | {duration} min/ep
      </p>
      <Button
        onClick={handleFavoriteClick}
        color={inFavorites ? colors.lightRed : colors.lightGreen}
      >
        {inFavorites ? "Remove From Favorites" : "Add To Favorites"}
      </Button>
    </div>
  );
};

const bannerStyle = (images: any): React.CSSProperties => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${
    images ? images.original : imageNotFound.src
  })`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 35%",
  minHeight: 300,
});

export default SingleMovieHero;
