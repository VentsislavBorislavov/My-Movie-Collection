import Link from "next/link";
import movieStyles from "../../styles/MovieSearch.module.scss";
import Button from "../common/Button";
import colors from "../../colors";
import { Movie } from "../../interfaces";
import imageMissing from "../../public/image-not-found.jpg";
import { useEffect, useState } from "react";

// TODO make different interfaces so the red unterlines go away 😡

interface PropTypes {
  movie: Movie;
}

interface Data {
  isFavorite: boolean;
}

const MovieListItem = ({ movie }: PropTypes) => {
  const id = movie.id;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const fetchFavorite = async () => {
    const data = { isFavorite: !isFavorite, image: movie.images?.medium };
    console.log("working?");
    const res = await fetch(`http://localhost:3000/api/movie/${id}/favorite`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    setIsFavorite(!isFavorite);
    return res;
  };

  useEffect(async () => {
    const res = await fetch(`http://localhost:3000/api/movie/${id}/favorite`);
    const data: Data = await res.json();

    setIsFavorite(data.isFavorite);
  });

  return (
    <div className={movieStyles.movie}>
      <Link href={`/movies/${movie.id}`}>
        <img
          src={movie.images ? movie.images.medium : imageMissing.src}
          alt=""
        />
      </Link>
      <div className={movieStyles.movieInfo}>
        <div>
          <Link href={`/movies/${movie.id}`}>
            <a>
              <h2>
                {movie.title} ({movie.year})
              </h2>
            </a>
          </Link>
          <p className={movieStyles.basicInfo}>
            {movie.genres!.join(", ")} | {movie.duration} minutes
          </p>
          <p className={movieStyles.description}>
            {removeUnecessaryTags(movie?.description)}
          </p>
          <a className={movieStyles.siteLink} href={movie.link}>
            Vist Official Website
          </a>
        </div>
        <Button
          onClick={() => {
            fetchFavorite();
          }}
          color={isFavorite ? colors.lightRed : colors.lightGreen}
        >
          {isFavorite? "Remove From Favorites" : "Add To Favorites"}
        </Button>
      </div>
    </div>
  );
};

export const removeUnecessaryTags = (desc: string | undefined) => {
  const reg = /<\/?[\w\d]>/gi;
  return desc?.replace(reg, "");
};

export default MovieListItem;
