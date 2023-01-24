import { type NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Generator from "../components/Generator";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ReadMe Generator 👌</title>
        <meta name="description" content="ReadMe generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Header title="readme generator" />
          <Generator />
        </div>
      </main>
    </>
  );
};

export default Home;
