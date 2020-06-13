import Head from "next/head";
import tw from "twin.macro";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>paulfri.dev</title>
      </Head>

      <main>
        <h1 tw="text-3xl font-bold">paulfri.dev</h1>
      </main>

      <footer>Made by Paul Friedman in Seattle 🏔 and San Francisco 🌉.</footer>
    </div>
  );
}
