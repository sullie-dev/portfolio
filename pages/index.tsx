import type { NextPage } from "next";
import {
  Flex,
  Spacer,
  Text,
  Image,
  Heading,
  Wrap,
  WrapItem,
  Box,
  IconButton,
  Center,
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
      <Wrap py={[2, 4, 6, 8]} px="1">
        <WrapItem>
          <Flex flexDirection="column">
            <Heading
              w="650px"
              h="fit-content"
              fontSize={["2xl", "6xl"]}
              color="gray.800"
            >
              Eoghan O Sullivan
            </Heading>
            <Text fontSize={["l", "2xl"]} color="gray.500">
              Web Developer based in Co.Cork, Ireland
            </Text>
          </Flex>
        </WrapItem>
        <Spacer />
        <WrapItem h="100%">
          <Image
            borderRadius="full"
            boxSize={["390px", "500px"]}
            src="/portfolio.jpg"
            alt="Eoghan O'Sullivan"
          />
        </WrapItem>
      </Wrap>
      <Wrap>
        <Heading
          w="650px"
          h="fit-content"
          fontSize={["xl", "5xl"]}
          color="gray.800"
        >
          Projects
        </Heading>
        {projectData.map((project: projectProp) => (
          <PortfolioCard
            key={project.project_name}
            title={project.project_name}
            url={project.url}
            stack={project.stack}
            image={project.image.url}
          />
        ))}
      </Wrap>
      {/* Contact */}

      <Heading
        w="650px"
        h="fit-content"
        fontSize={["xl", "5xl"]}
        color="gray.800"
      >
        Contact me
      </Heading>
      <Wrap>
        <Center w="100vw" h="80px">
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="mailto:eoghan@sullie.dev"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Email me on eoghan@sullie.dev"
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="http://twitter.com/drunkdarthvader"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Follow me on Twitter @drunkdarthvader"
                    icon={<FontAwesomeIcon icon={faTwitter} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="http://instagram.com/drunkdarkvader"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Follow my on Instagram @sullie-dev"
                    icon={<FontAwesomeIcon icon={faInstagram} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="http://github.com/sullie-dev"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Follow my on Github @sullie-dev"
                    icon={<FontAwesomeIcon icon={faGithub} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
        </Center>
      </Wrap>
      <Footer />
    </div>
  );
};

export default Home;
