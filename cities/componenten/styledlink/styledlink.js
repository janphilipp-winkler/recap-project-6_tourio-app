import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);

  &:hover {
    color: var(--secondary-color);
  }
`;
