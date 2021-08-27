import movieStyles from "../../styles/Movie.module.scss";
import StarRatingComponent from "react-star-rating-component";
import { ExtendedMovie } from "../../interfaces";
import { removeUnecessaryTags } from "./MovieListItem";
import React, { useState } from "react";

// TODO make function for textArea onChange that sends the value to dabase and saves it
// TODO make clicking on stars change rating

const SingleMovieRate = ({ description, rating, note }: ExtendedMovie) => {
  const [noteValue, setNoteValue] = useState(note);
  return (
    <div className={movieStyles.rate}>
      <h2>Description</h2>
      <p className={movieStyles.description}>
        {removeUnecessaryTags(description!)}
      </p>

      <h2>Your Review</h2>
      <div style={{ fontSize: 34 }}>
        <StarRatingComponent name="rating" value={rating} starCount={5} />
      </div>
      <textarea
        placeholder="Write your notes here"
        name="note"
        id="note"
        value={noteValue}
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
          setNoteValue(e.target.value)
        }
      ></textarea>
    </div>
  );
};

export default SingleMovieRate;
