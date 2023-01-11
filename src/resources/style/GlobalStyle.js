import { createGlobalStyle } from "styled-components";
import {viewHeightCalc} from "../../lib/ViewportCalculate";

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
    background-color: ${props=>props.theme.color.background};
    min-height: ${viewHeightCalc(720,{})};
  }
  
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export default GlobalStyle;