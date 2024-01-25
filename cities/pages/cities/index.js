import { cities } from "@/lib/data";
import Head from "next/head";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <Head>
        <title>Cities of the World</title>
      </Head>
      <h1>Cities of The World</h1>
      <ul>
        {cities.map((city) => {
          return <li key={city.id}>{city.name}</li>;
        })}
      </ul>
    </>
  );
}
