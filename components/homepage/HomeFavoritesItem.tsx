import homeStyles from "../../styles/Home.module.scss";
import StarRatingComponent from "react-star-rating-component";
import Link from "next/link";

interface HomeFavoritesItemProps {
  title: string;
  rating: number;
  year: number;
  image: string;
}

const HomeFavoritesItem = ({
  title,
  rating,
  year,
  image,
  id,
}: HomeFavoritesItemProps) => {
  return (
    <Link href={`/movies/${id}`}>
      <div
        className={homeStyles.favoritesItem}
        style={{ backgroundImage: `url(${image})`, cursor: "pointer" }}
      >
        <div className={homeStyles.movieInfo}>
          <h3>{title}</h3>
          <span>{year}</span>
          <span>Your rating</span>
          <StarRatingComponent name="movierate" starCount={5} value={rating} />
        </div>
      </div>
    </Link>
  );
};

export default HomeFavoritesItem;
