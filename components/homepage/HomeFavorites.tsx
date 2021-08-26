import HomeFavoritesItem from "./HomeFavoritesItem";
import homeStyles from "../../styles/Home.module.scss";
import testPoster from "../../public/Blackwidow2.jpg";
import { useRef, useEffect } from "react";

const HomeFavorites = () => {
  const filmArray = Array(10).fill(null);
  const favMoviesRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(favMoviesRef.current);
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
      <h2>
        <a href="/favorites">Your favorites</a>
      </h2>
      <div ref={favMoviesRef} className={homeStyles.favorites}>
        {filmArray.map((film, idx) => (
          <HomeFavoritesItem
            key={idx}
            title="Black Widow"
            year={2021}
            rating={3}
            img={testPoster}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFavorites;
