import colors from "../../colors";
import movieStyles from "../../styles/Movie.module.scss";
import Button from "../common/Button";
import testImage from "../../public/BlackWidow2.jpg";
import { useState } from "react";

interface SingleMovieHeroPropTypes {
  title: string;
  year: string;
  genres: string[];
  length: number;
  isFavorite: boolean;
  image: string;
}

const SingleMovieHero = ({
  title,
  year,
  genres,
  length,
  isFavorite,
}: SingleMovieHeroPropTypes) => {
  const [inFavorites, setIsInFavorites] = useState<boolean>(isFavorite);
  return (
    <div style={headStyle} className={movieStyles.movieHeader}>
      <h1>Movie Title</h1>
      <h2>2021</h2>
      <p className={movieStyles.genres}>Drama, Thriller, Comedy | 90 minutes</p>
      <Button color={inFavorites ? colors.lightRed : colors.lightGreen}>
        {inFavorites ? "Remove From Favorites" : "Add To Favorites"}
      </Button>
    </div>
  );
};

const headStyle: React.CSSProperties = {
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${testImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "50% 35%",
  minHeight: 300,
};

export default SingleMovieHero;
