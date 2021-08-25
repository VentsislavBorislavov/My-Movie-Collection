import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
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
