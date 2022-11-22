import {useState, useEffect} from 'react'
import Head from "next/head";
import { InferGetServerSidePropsType } from "next";
import {motion} from 'framer-motion'

import clientPromise from "../lib/mongodb";
import HomeLinks from "./../components/HomeLinks";
import Footer from "./../components/footer/index";
import Header from "./../components/header/index";
import Carousel from "../components/carousel/Carousel";
import useProducts from "../hooks/useProducts";
import HomeAbout from "../components/HomeAbout";

export async function getServerSideProps() {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [mousePos, setMousPos] = useState({
    x: 0,
    y: 0,
  })

  const data = useProducts();
  
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-white">
      <Head>
        <title>brimacommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="flex flex-col mt-16">
        {/* <h2 className="text-[3rem] uppercase max-w-[600px] self-center text-center">minimal & sustainable clothing</h2> */}
        <Carousel />
        <HomeAbout />
        {isConnected ? (
          <h2 className="">
            You are{" "}
            <span className="font-medium text-green-400">connected</span> to
            MongoDB
          </h2>
        ) : (
          <h2 className="subtitle">
            You are{" "}
            <span className="font-medium text-red-400">NOT connected</span> to
            MongoDB. Check the <code>README.md</code> for instructions.
          </h2>
        )}

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <HomeLinks />
      <Footer />
    </div>
  );
}
