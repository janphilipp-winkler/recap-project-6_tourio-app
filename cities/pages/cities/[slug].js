import Link from "next/link";
import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Head from "next/head";
import { StyledLink } from "@/components/StyledLink/index";

export default function Cities() {
  const router = useRouter();
  const { slug } = router.query;

  const currentCity = cities.find((city) => city.slug === slug);

  const { name, country, population, description } = currentCity;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <h1>{name}</h1>
      <h2>Country: {country}</h2>
      <h2>Population: 👯‍♀️ {population}</h2>
      <p>{description}</p>

      <StyledLink href="/cities"> Back to Index of Cities </StyledLink>
    </>
  );
}
