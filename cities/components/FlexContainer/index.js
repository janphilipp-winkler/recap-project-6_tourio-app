import styled from "styled-components";

export const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
`;
