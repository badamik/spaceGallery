import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Rubik:400,500&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; //1 rem == 10px
    }

    body {
        font-size: 1.6rem;
        font-family: 'Rubik';
    }
`;

export default GlobalStyle;