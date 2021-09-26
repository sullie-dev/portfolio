import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";
import portfolioImg from "/public/portfolio_image.jpg";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sullie | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portfolio website for Eoghan O Sullivan a Cork based web developer"
        />
        <meta
          name="keywords"
          content="developer, web developer, irish developer, react.js developer"
        />
      </Head>

      <div className="flex flex-col md:flex-row">
        <div className="text-center p-7 sm:float-right md:w-11/12  md:py-64">
          <h1 className="text-grey-900 text-2xl sm:text-4xl md:text-6xl">
            Eoghan O Sullivan
          </h1>
          <h2 className="text-grey-500 text-xl sm:text-2xl md:text-4xl">
            Web Developer
          </h2>
        </div>
        <Image
          src={portfolioImg}
          className="w-10 p-7 rounded-full sm:float-right md:w-1/12"
        />
      </div>
      <div>
        <PortfolioCard
          title="Test"
          url="https://google.com"
          stack={["html", "javascripy", "css"]}
        />
        <PortfolioCard
          title="Test"
          url="https://google.com"
          stack={["html", "javascripy", "css"]}
        />
        <PortfolioCard
          title="Test"
          url="https://google.com"
          stack={["html", "javascripy", "css"]}
        />
        <PortfolioCard
          title="Test"
          url="https://google.com"
          stack={["html", "javascripy", "css"]}
        />
      </div>
      <div>contact info 2</div>
    </div>
  );
};

export default Home;
