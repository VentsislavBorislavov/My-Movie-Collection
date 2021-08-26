import type { NextPage } from "next";
import Hero from "../components/homepage/Hero";
import HomeFavorites from "../components/homepage/HomeFavorites";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <HomeFavorites />
    </div>
  );
};

export default Home;
