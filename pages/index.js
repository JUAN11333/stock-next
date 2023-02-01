import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>ABOUT PAGE</title>
      </Head>
      <h1>ABOUT MAY</h1>
      <p>THIS IS ABOUT MAY.</p>
      <Link href="/about">About</Link>
    </>
  );
}
