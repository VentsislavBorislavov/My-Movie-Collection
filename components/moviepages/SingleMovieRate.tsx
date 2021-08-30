import movieStyles from "../../styles/Movie.module.scss";
import ReactStars from "react-rating-stars-component";
import { ExtendedMovie } from "../../interfaces";
import { removeUnecessaryTags } from "./MovieListItem";
import React, { useEffect, useState } from "react";

// TODO make clicking on stars change rating

const saveNote = async (id: number | undefined, note: string | undefined) => {
  const res = await fetch(`http://localhost:3000/api/movie/${id}/note`, {
    method: "POST",
    body: JSON.stringify({ note: note }),
  });
};

const SingleMovieRate = ({ description, rating, note, id }: ExtendedMovie) => {
  const [noteValue, setNoteValue] = useState(note);

  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteValue(e.target.value);
  };

  const ratingChanged = async (rating: any) => {
    const res = await fetch(`http://localhost:3000/api/movie/${id}/rating`, {
      method: "POST",
      body: JSON.stringify({ rating }),
    });
  };

  return (
    <div className={movieStyles.rate}>
      <h2>Description</h2>
      <p className={movieStyles.description}>
        {removeUnecessaryTags(description!)}
      </p>

      <h2>Your Review</h2>
      <ReactStars
        value={rating}
        size={44}
        starCount={5}
        onChange={ratingChanged}
      />
      <textarea
        placeholder="Write your notes here"
        name="note"
        id="note"
        value={noteValue}
        onChange={handleChange}
      ></textarea>
      <button
        onClick={() => {
          saveNote(id, noteValue);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default SingleMovieRate;
