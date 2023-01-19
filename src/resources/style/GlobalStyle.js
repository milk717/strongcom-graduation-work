import { createGlobalStyle } from "styled-components";
import {viewHeightCalc} from "../../lib/viewportCalculate";

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
    padding: 16px;
    margin-top: ${viewHeightCalc(56,{})};
    background-color: ${props=>props.theme.color.background};
    min-height: ${viewHeightCalc(720-102,{})};
  }
  
  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export default GlobalStyle;