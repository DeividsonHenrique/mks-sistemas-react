import { createGlobalStyle } from "styled-components";

const GloblaStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #f9f9f9;
        color: black;
      }

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        color-scheme: light dark;
        min-height: 100vh;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;}
`;

export default GloblaStyle;
