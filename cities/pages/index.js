import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>
        <span> 🌏 </span>Hello World
      </h1>
      <Link href="./pages/cities/index.js">Index of cities of the World</Link>
    </>
  );
}
