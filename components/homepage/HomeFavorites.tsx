import HomeFavoritesItem from "./HomeFavoritesItem";
import homeStyles from "../../styles/Home.module.scss";
import { useRef, useEffect } from "react";
import { DBMovie } from "../../interfaces";

interface HomeFavoritesType {
  movies: DBMovie[];
}

const HomeFavorites = ({ movies }: HomeFavoritesType) => {
  const favMoviesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    favMoviesRef.current?.addEventListener("wheel", (e: WheelEvent) => {
      e.preventDefault();
      favMoviesRef.current!.scrollLeft += e.deltaY;
    });
    return () => {
      favMoviesRef.current?.removeEventListener("wheel", () => {});
    };
  }, []);
  return (
    <section className={homeStyles.homeFavorites}>
      <h2>Your favorites</h2>
      <div ref={favMoviesRef} className={homeStyles.favorites}>
        {movies ? (
          movies.map((movie: DBMovie) => (
            <HomeFavoritesItem
              key={movie.id}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              image={movie.image}
              id={movie.id}
            />
          ))
        ) : (
          <div style={{ textAlign: "center" }}>You have no favorite movies</div>
        )}
      </div>
    </section>
  );
};

export default HomeFavorites;
