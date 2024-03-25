import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color:${theme.color.primaryBg};
    margin: 0;
    font-family:"Poppins","DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color:${theme.color.font};
    overflow-x: hidden;
}

a {
    /* text-decoration: none; */
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section  {
    background-color:${theme.color.primaryBg};

}
`