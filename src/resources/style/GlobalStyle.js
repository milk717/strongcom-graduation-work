import { createGlobalStyle } from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }
  
  body{
    background-color: ${props=>props.theme.color.background};
  }
  
  header{
    position: relative;
    top: 0;
    width: 100%;
  }
  
  main{
    padding: 16px;
    margin-top: 56px;
    background-color: ${props=>props.theme.color.background};
  }
  
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export default GlobalStyle;
