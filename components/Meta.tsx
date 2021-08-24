import Head from "next/head";

interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta = ({ title, keywords, description }: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "My Movie Collection",
  keywords: "movies, my movie collection, movie search, movie rate",
  description:
    "The place where you can find all of your favorite movies. Here you can rate and add notes to them.",
};

export default Meta;
