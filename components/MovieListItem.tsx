import Link from "next/link";
import movieStyles from "../styles/Movies.module.scss";
import Button from "./Button";
import colors from "../colors";

interface PropTypes {
  title: string;
  year: string | number;
  genres: string[];
  lenghtInMin: number | string;
  description: string;
  link: string;
  isFavorite: boolean;
  movieId: any;
  poster: string;
}

const MovieListItem = ({
  title,
  year,
  genres,
  lenghtInMin,
  description,
  link,
  isFavorite,
  movieId,
  poster,
}: PropTypes) => {
  return (
    <div className={movieStyles.movie}>
      <Link href={`/movies/${movieId}`}>
        <img src={poster} alt="" />
      </Link>
      <div className={movieStyles.movieInfo}>
        <div>
          <Link href={`/movies/${movieId}`}>
            <a>
              <h2>
                {title} ({year})
              </h2>
            </a>
          </Link>
          <p className={movieStyles.basicInfo}>
            {genres.join(",")} | {lenghtInMin} minutes
          </p>
          <p className={movieStyles.description}>{description}</p>
          <a className={movieStyles.siteLink} href={link}>
            Vist Official Website
          </a>
        </div>
        <Button color={colors.green}>Add To favorites</Button>
      </div>
    </div>
  );
};

export default MovieListItem;
