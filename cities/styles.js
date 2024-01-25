import { createGlobalStyle } from "styled-components";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color:#FA8072;
    --secondary-color: #FFA07A
  }

  body {
    margin: 0;
    font-family: ${workSans.style.fontFamily};
  }
`;
