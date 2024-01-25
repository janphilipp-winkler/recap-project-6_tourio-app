import { cities } from "@/lib/data";
import styled from "styled-components";
import Head from "next/head";
import { StyledLink } from "@/components/StyledLink/index";

export default function Cities() {
  return (
    <>
      <Head>
        <title>Cities of the World</title>
      </Head>
      <h1>Cities of The World</h1>
      <StyledUl>
        {cities.map((city) => {
          return (
            <StyledUl key={city.id}>
              <StyledLink href={`cities/${city.slug}`}>{city.name}</StyledLink>
            </StyledUl>
          );
        })}
      </StyledUl>
      <StyledLink href="/">
        <span>← </span> Back to home
      </StyledLink>
    </>
  );
}

const StyledUl = styled.ul`
  text-decoration: none;
`;
