import React, { ReactElement } from "react";
import Image from "next/image";

export interface CardProps {
  title: string;
  image: any;
  stack: string[];
  url: string;
}

export default function PortfolioCard(props: CardProps): ReactElement {
  return (
    <div className="alighn-center w-full p-3 float-left md:w-6/12 lg:w-3/12">
      <h1 className="text-center text-l font-bold">{props.title}</h1>
      <Image
        src={props.image}
        alt={props.title}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      />
      <h3 className="text-center font-semibold">Technology used </h3>
      <ul>
        {props.stack.map((stacks) => (
          <li key={stacks}>{stacks}</li>
        ))}
      </ul>
      <button className="mt-5 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
        <a href={props.url} target="_blank" rel="noreferrer">
          Visit the project
        </a>
      </button>
    </div>
  );
}
