import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MAY PAGE</title>
      </Head>
      <h1>MAY MAY</h1>
      <p>THIS IS MAY.</p>
      <Link href="/about">About</Link>
    </>
  );
}
