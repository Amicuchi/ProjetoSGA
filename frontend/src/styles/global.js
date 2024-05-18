import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }
  
  body {
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }

  h2 {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;

export default Global;