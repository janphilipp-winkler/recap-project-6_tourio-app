import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Head from "next/head";
import { StyledLink } from "@/components/StyledLink/index";
import { FlexContainer } from "@/components/FlexContainer/index";
import Layout from "@/components/Layout";
import styled from "styled-components";

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
      <Layout>
        <FlexContainer $direction="column">
          <h1>{name}</h1>
          <h2>Country: {country}</h2>
          <h2>Population: 👯‍♀️ {population} 👬 </h2>
          <StyledParagraph>{description}</StyledParagraph>

          <StyledLink href="/cities"> Back to Index of Cities </StyledLink>
        </FlexContainer>
      </Layout>
    </>
  );
}

const StyledParagraph = styled.p`
  text-align: justify;
`;
