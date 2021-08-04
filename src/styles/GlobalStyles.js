import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Sunflower', sans-serif;
    }

    body, html {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        background: white;
    }
`

export default GlobalStyle;