import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";
import portfolioImg from "/public/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { GetStaticProps } from "next";
import client from "../lib/sanity";

// Create a query called homepageQuery
const projectQuery = `*[_type == "projects"]{
  project_name,
  url,
  image {
    ...asset->
  },
  stack
}`;

export async function getStaticProps() {
  const projectData = await client.fetch(projectQuery);

  const data = { projectData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

const Home: NextPage = ({ data }) => {
  const { projectData } = data;

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
          <h1 className="text-gray-600 text-2xl sm:text-4xl md:text-6xl">
            Eoghan O Sullivan
          </h1>
          <h2 className="text-gray-500 text-xl sm:text-2xl md:text-4xl">
            Web Developer
          </h2>
        </div>
        <div className="m-auto w-7/12 p-7 sm:float-right md:w-5/12">
          <Image src={portfolioImg} className=" rounded-full " />
        </div>
      </div>
      <div className="inline-block w-full">
        <h2 className="text-center mb-12 text-2xl md:text-2xl">Projects</h2>
        {projectData.map((project) => (
          <PortfolioCard
            title={project.project_name}
            url={project.url}
            stack={project.stack}
            image={project.image.url}
          />
        ))}
      </div>
      {/* Contact */}
      <div className="inline-block mt-5 p-15 h-auto w-full">
        <h2 className="text-center text-2xl md:text-2xl">Contact me</h2>

        <div className="w-full float-left md:w-6/12 lg:w-3/12">
          <h3 className="text-l text-center md:text-xl md:w-3/12">
            <FontAwesomeIcon icon={faEnvelope} /> eoghan@sullie.dev
          </h3>
        </div>
        <div className="w-full float-left md:w-6/12 lg:w-3/12">
          <a
            href="http://twitter.com/drunkdarthvader"
            aria-label="Follow me on Twitter @drunkdarthvader"
            rel="noreferrer noopener"
            target="_blank"
          >
            <h3 className="text-l md:text-xl md:w-3/12">
              <FontAwesomeIcon icon={faTwitter} /> @drunkdarthvader
            </h3>
          </a>
        </div>
        <div className="w-full float-left md:w-6/12 lg:w-3/12">
          <a
            href="http://instagram.com/drunkdarkvader"
            aria-label="Follow my on Instagram @sullie-dev"
            rel="noreferrer noopener"
            target="_blank"
          >
            <h3 className="text-l md:text-xl md:w-3/12">
              <FontAwesomeIcon icon={faInstagram} /> @drunkdarkvader
            </h3>
          </a>
        </div>
        <div className="w-full float-left md:w-6/12 lg:w-3/12">
          <a
            href="http://github.com/sullie-dev"
            aria-label="Follow my on Github @sullie-dev"
            rel="noreferrer noopener"
            target="_blank"
          >
            <h3 className="text-l md:text-xl md:w-3/12">
              <FontAwesomeIcon icon={faGithub} /> sullie-dev
            </h3>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
