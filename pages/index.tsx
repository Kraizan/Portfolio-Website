import Divider from "@/components/Divider";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Landing from "./Landing";
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
      <video
        src={require("../public/videos/bg-video.mp4")}
        autoPlay
        loop
        muted
      />
      <main className="mx-40">
        <Navbar />
        <Divider />
        <Landing />
        <Divider />
      </main>
    </>
  );
}
