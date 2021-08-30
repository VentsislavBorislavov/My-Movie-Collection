import link from "next/link";
import SingleMovieHero from "../../components/moviepages/SingleMovieHero";
import SingleMovieRate from "../../components/moviepages/SingleMovieRate";
import { Movie } from "../../interfaces";

interface MovieType {
  filteredMovie: Movie;
}

// TODO fix bug when movie does not have image the page crashes

const movie = ({ filteredMovie: movie }: MovieType) => {
  return (
    <>
      <SingleMovieHero
        title={movie.title}
        year={movie.year}
        isFavorite
        genres={movie.genres}
        duration={movie.duration}
        images={movie.images}
      />
      <SingleMovieRate
        description={movie.description}
        rating={0}
        note="random note"
      />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${context.params.id}`);
  const movie = await res.json();
  const filteredMovie = {
    title: movie.name,
    genres: movie.genres,
    duration: movie.runtime,
    year: movie.premiered,
    link: movie.officialSite,
    images: movie.image,
    description: movie.summary,
  };

  return {
    props: {
      filteredMovie,
    },
  };
};

export default movie;
