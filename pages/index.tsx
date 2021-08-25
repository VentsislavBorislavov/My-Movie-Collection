import type { NextPage } from "next";
import Hero from "../components/Hero";
import HomeFavorites from "../components/HomeFavorites";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <HomeFavorites />
    </div>
  );
};

export default Home;
