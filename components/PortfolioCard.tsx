import React, { ReactElement } from "react";
// import Image from "next/image";
import { Container, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { List, ListItem, UnorderedList, Button } from "@chakra-ui/react";

export interface CardProps {
  title: string;
  image: any;
  stack: string[];
  url: string;
}

export default function PortfolioCard(props: CardProps): ReactElement {
  return (
    <Container w="100%">
      <Heading fontSize={["l", "xl"]} color="gray.800">
        {props.title}
      </Heading>
      <Image
        src={props.image}
        alt={props.title}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      />
      <Heading fontSize={["m", "l"]}>Technology used </Heading>
      <UnorderedList>
        {props.stack.map((stacks) => (
          <List>
            <ListItem key={stacks}>{stacks}</ListItem>
          </List>
        ))}
      </UnorderedList>
      <Button>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`You arere going to view my ${props.title} project`}
        >
          Visit the project
        </a>
      </Button>
    </Container>
  );
}
