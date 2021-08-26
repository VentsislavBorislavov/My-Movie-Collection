import movieStyles from "../../styles/Movie.module.scss";
import Button from "../../components/Button";
import StarRatingComponent from "react-star-rating-component";
import testImage from "../../public/BlackWidow2.jpg";
import colors from "../../colors";

const movie = () => {
  return (
    <>
      <div style={headStyle} className={movieStyles.movieHeader}>
        <h1>Movie Title</h1>
        <h2>2021</h2>
        <p className={movieStyles.genres}>
          Drama, Thriller, Comedy | 90 minutes
        </p>
        <Button color={colors.lightGreen}>Add To Favorites</Button>
      </div>

      <div className={movieStyles.rate}>
        <h2>Description</h2>
        <p className={movieStyles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          molestias voluptates tempore sunt earum laboriosam maxime error nobis.
          Placeat rem odit pariatur aut accusantium! Autem iure impedit ipsum
          amet dolorum beatae tenetur consectetur perferendis quam ab?
          Praesentium fugiat ducimus placeat tempora error! Molestiae,
          asperiores facilis ut repudiandae quia commodi ullam quisquam nobis
          excepturi nostrum tempore labore incidunt recusandae deserunt
          molestias!
        </p>

        <h2>Your Review</h2>
        <div style={{ fontSize: 34 }}>
          <StarRatingComponent name="rating" value={4} starCount={5} />
        </div>
        <textarea
          placeholder="Write your notes here"
          name="note"
          id="note"
        ></textarea>
      </div>
    </>
  );
};

const headStyle: React.CSSProperties = {
  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${testImage.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: 300,
};

export default movie;
