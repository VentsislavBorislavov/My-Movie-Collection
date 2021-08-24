import homeStyles from "../styles/Home.module.scss";
import Link from "next/link";
const Hero = () => {
  return (
    <section className={homeStyles.heroContainer}>
      <h1>My Movie Collection</h1>
      <p className={homeStyles.description}>
        The place where you can find all of your favorite movies. Here you can
        rate and add notes to them.
      </p>
      <Link href="/movies">Search</Link>
    </section>
  );
};

export default Hero;
