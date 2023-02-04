import Divider from "@/components/Divider";
import Navbar from "@/components/Navbar";
import { Inter } from "@next/font/google";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Portfolio website of Vanshaj Bhatnagar"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Divider />
    </>
  );
}
