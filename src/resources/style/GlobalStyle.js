import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }
  
  header{
    position: fixed;
    top: 0;
    width: 100%;
  }
  
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export default GlobalStyle;