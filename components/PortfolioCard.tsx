import React, { ReactElement } from "react";

export interface CardProps {
  title: string;
  image?: string;
  stack?: string[];
  url?: string;
}

export default function PortfolioCard(props: CardProps): ReactElement {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
