import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }
  
  header{
    position: relative;
    top: 0;
    width: 100%;
  }
  
  main{
    position: relative;
    padding: 16px;
  }
  
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export default GlobalStyle;