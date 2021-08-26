import homeStyles from "../../styles/Home.module.scss";
import StarRatingComponent from "react-star-rating-component";
interface HomeFavoritesItemProps {
  title: string;
  rating: number;
  year: number;
  img: any;
}

const HomeFavoritesItem = ({
  title,
  rating,
  year,
  img,
}: HomeFavoritesItemProps) => {
  return (
    <div
      className={homeStyles.favoritesItem}
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className={homeStyles.movieInfo}>
        <h3>{title}</h3>
        <span>{year}</span>
        <span>Your rating</span>
        <StarRatingComponent name="movierate" starCount={5} value={3} />
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default HomeFavoritesItem;
