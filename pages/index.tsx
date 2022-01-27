import type { NextPage } from "next";
import {
  Text,
  Image,
  Heading,
  Container,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import PortfolioCard from "../components/PortfolioCard";
import client from "../lib/sanity";

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
      <Flex width={["100vw"]} height={["auto", "45vh", "75vh"]}>
        <Container
          width={["100vw", "50vw"]}
          height={["50vh", "100vh"]}
          py={[8, 12, 16]}
          px={[4, 3, 1]}
          flex={1}
          centerContent
        >
          <Heading fontSize={["3xl", "3xl", "6xl"]} color="gray.800">
            Eoghan O&apos;Sullivan
          </Heading>
          <Text fontSize={["l", "xl", "2xl"]} color="gray.500">
            Web Developer based in Co.Cork, Ireland
          </Text>
        </Container>
        <Container
          width={"fit-content"}
          height={"fit-content"}
          py={[4, 6, 8]}
          flex={1}
          display={["none", "none", "block"]}
          centerContent
        >
          <Image
            borderRadius="full"
            src="/portfolio.jpg"
            alt="Eoghan O'Sullivan"
            w="75%"
          />
        </Container>
      </Flex>
      <Flex width={["50vw"]}>
        <Container width="100vw" height="fit-content" flex={1}>
          <Heading fontSize={["xl", "2xl", "4xl"]} color={"gray.800"}>
            Projects
          </Heading>
        </Container>
      </Flex>
      <Wrap py={[2, 4, 6, 8]} px="1">
        <Wrap>
          {projectData.map((project: projectProp) => (
            <WrapItem
              w={["100%", "100%", "47%", "32%"]}
              p={[2, 4, 6, 8]}
              key={`${project.project_name} wrap`}
            >
              <PortfolioCard
                key={project.project_name}
                title={project.project_name}
                url={project.url}
                stack={project.stack}
                image={project.image.url}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Wrap>
      <Footer />
    </div>
  );
};

export default Home;
