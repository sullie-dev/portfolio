import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sullie | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Portfolio website for Eoghan O'Sullivan a Cork based web developer"
        />
        <meta
          name="keywords"
          content="developer, web developer, irish developer, react.js developer"
        />
      </Head>

      <div>
        <div>image</div>
        <div>about</div>
      </div>
      <div>Portfolio cards</div>
      <div>contact info</div>
      <div>Footer component</div>
    </div>
  );
};

export default Home;
