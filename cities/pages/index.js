import Head from "next/head";
import Link from "next/link";
import { FlexContainer } from "@/components/FlexContainer/index";
import { StyledLink } from "@/components/StyledLink/index";

export default function HomePage() {
  return (
    <>
      <FlexContainer $direction="column">
        {" "}
        <h1>
          <span> 🌏 </span> Hello world!
        </h1>
        <StyledLink href="./cities">
          {" "}
          <span>→ </span>Check out here some info about the largest cities of
          the World
        </StyledLink>
      </FlexContainer>
    </>
  );
}
