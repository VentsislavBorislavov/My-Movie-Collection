import homeStyles from "../../styles/Home.module.scss";
import Link from "next/link";
const Hero = () => {
  return (
    <section className={homeStyles.heroContainer}>
      <h1>My TV Shows</h1>
      <p className={homeStyles.description}>
        The place where you can find all of your favorite TV shows. <br />{" "}
        Explore, Rate, Take notes!
      </p>
      <Link href="/movies">Search</Link>
    </section>
  );
};

export default Hero;
