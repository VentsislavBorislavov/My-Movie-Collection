import type { NextPage } from "next";
import Hero from "../components/homepage/Hero";
import HomeFavorites from "../components/homepage/HomeFavorites";

const Home: NextPage = ({ movies }) => {
  return (
    <div>
      <Hero />
      <HomeFavorites movies={movies} />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const res = await fetch(`http://localhost:3000/api/movie/favorites`);
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};

export default Home;
