import type { NextPage } from "next";
import {
  Flex,
  Spacer,
  Text,
  Image,
  Heading,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import client from "../lib/sanity";
import { createBreakpoints } from "@chakra-ui/theme-tools";

interface projectProp {
  project_name: string;
  url: string;
  stack: string[];
  image: any;
}

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

const Home: NextPage = ({ data }: any) => {
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
      <Wrap p="15px">
        <WrapItem>
          <Flex flexDirection="column">
            <Heading w="650px" h="fit-content" fontSize="6xl" color="gray.800">
              Eoghan O Sullivan
            </Heading>
            <Text fontSize="xl " color="gray.500">
              Web Developer based in Co.Cork, Ireland
            </Text>
          </Flex>
        </WrapItem>
        <Spacer />
        <WrapItem>
          <Image
            borderRadius="full"
            boxSize="500px"
            src="/portfolio.jpg"
            alt="Eoghan O'Sullivan"
          />
        </WrapItem>
      </Wrap>
      <div className="inline-block w-full">
        <h2 className="text-center mb-12 text-2xl md:text-2xl">Projects</h2>
        {projectData.map((project: projectProp) => (
          <PortfolioCard
            key={project.project_name}
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
            <h3 className="text-l text-center md:text-xl md:w-3/12">
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
            <h3 className="text-l text-center md:text-xl md:w-3/12">
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
            <h3 className="text-l text-center text center md:text-xl md:w-3/12">
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
