import styled from "styled-components";

export const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  // it's possible to set a default value for a prop, like in this example with $direction = "row"
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
`;
