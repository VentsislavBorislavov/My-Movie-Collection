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

export const fetchFavorite = async (
  id: string | number,
  isFavorite: boolean,
  image: string
) => {
  const data = { isFavorite: !isFavorite, image };
  const res = await fetch(`http://localhost:3000/api/movie/${id}/favorite`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res;
};

const favorite = async (id: number | undefined) => {
  const res = await fetch(`http://localhost:3000/api/movie/${id}/favorite`);
  return await res.json();
};

const MovieListItem = ({ movie }: PropTypes) => {
  const id = movie.id;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteClick = () => {
    fetchFavorite(id, isFavorite, movie.images?.medium);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    favorite(id).then((isFav) => setIsFavorite(isFav.isFavorite));
  }, []);

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
          onClick={handleFavoriteClick}
          color={isFavorite ? colors.lightRed : colors.lightGreen}
        >
          {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
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
