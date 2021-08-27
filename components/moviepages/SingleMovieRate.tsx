import movieStyles from "../../styles/Movie.module.scss";
import StarRatingComponent from "react-star-rating-component";

interface SingleMovieRatePropTypes {
  description: string;
  rate: number;
  note: string;
}

const SingleMovieRate = ({
  description,
  rate,
  note,
}: SingleMovieRatePropTypes) => {
  return (
    <div className={movieStyles.rate}>
      <h2>Description</h2>
      <p className={movieStyles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        molestias voluptates tempore sunt earum laboriosam maxime error nobis.
        Placeat rem odit pariatur aut accusantium! Autem iure impedit ipsum amet
        dolorum beatae tenetur consectetur perferendis quam ab? Praesentium
        fugiat ducimus placeat tempora error! Molestiae, asperiores facilis ut
        repudiandae quia commodi ullam quisquam nobis excepturi nostrum tempore
        labore incidunt recusandae deserunt molestias!
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
  );
};

export default SingleMovieRate;
