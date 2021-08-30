import link from "next/link";
import SingleMovieHero from "../../components/moviepages/SingleMovieHero";
import SingleMovieRate from "../../components/moviepages/SingleMovieRate";
import { DBMovie, Movie } from "../../interfaces";
import Meta from "../../components/common/Meta";

interface MovieType {
  filteredMovie: Movie;
  dbMovie: DBMovie;
}

const movie = ({ filteredMovie: movie, dbMovie }: MovieType) => {
  return (
    <>
      <Meta title={movie.title} />
      <SingleMovieHero
        title={movie.title}
        year={movie.year}
        isFavorite={dbMovie ? dbMovie.isFavorite : false}
        genres={movie.genres}
        duration={movie.duration}
        images={movie.images}
        id={movie.id}
      />
      <SingleMovieRate
        description={movie.description}
        rating={dbMovie ? dbMovie.rating : 0}
        note={dbMovie ? dbMovie.note : ""}
        id={movie.id}
      />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const movie = await res.json();

  const dbRes = await fetch(`http://localhost:3000/api/movie/${id}`);
  const dbMovie: DBMovie = await dbRes.json();

  const filteredMovie = {
    title: movie.name,
    genres: movie.genres,
    duration: movie.runtime,
    year: movie.premiered,
    link: movie.officialSite,
    images: movie.image,
    description: movie.summary,
    id,
  };

  return {
    props: {
      filteredMovie,
      dbMovie,
    },
  };
};

export default movie;
