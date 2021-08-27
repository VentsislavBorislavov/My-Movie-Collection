import Link from "next/link";
import movieStyles from "../../styles/Movies.module.scss";
import Button from "../common/Button";
import colors from "../../colors";
import { Movie } from "../../interfaces";
import imageMissing from "../../public/image-not-found.jpg";

interface PropTypes {
  movie: Movie;
  isFavorite: boolean;
}

const MovieListItem = ({ movie, isFavorite }: PropTypes) => {
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
            {movie.genres.join(", ")} | {movie.duration} minutes
          </p>
          <p className={movieStyles.description}>
            {removeUnecessaryTags(movie.description)}
          </p>
          <a className={movieStyles.siteLink} href={movie.link}>
            Vist Official Website
          </a>
        </div>
        <Button color={colors.green}>Add To favorites</Button>
      </div>
    </div>
  );
};

const removeUnecessaryTags = (desc: string) => {
  console.log(desc);
  const reg = /<\/?[\w\d]>/gi;
  return desc?.replace(reg, "");
};

export default MovieListItem;
