import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundDefault: "#D9E6F6",
  backgroundgSecondary: "#F1F9FE",

  primaryText: "#F1F9FE",
  // primaryText: "#2E7BB4",
  // secundaryText: "#388BB0",
  secundaryText: "#2E7BB4",
  tertiaryText: "#2F4A71",

  primaryElement: "#6F92BB",
  anotherElement: "#5579A1",

  headerElement: "#5C9ECF"
};

export const darkTheme = {
  backgroundDefault: "#282A36",
  backgroundgSecondary: "#f8f8f2",

  primaryText: "#F2F2F2",
  secundaryText: "#ff79c6",
  tertiaryText: "#6272a4",

  primaryElement: "#383A59",
  anotherElement: "#44475a",

  headerElement: "#5C9ECF"
};

export const GlobalStyles = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smooth: antialiased;

    background: ${({ theme }) => theme.backgroundDefault};
    color: ${({ theme }) => theme.primaryText};
    font-family: Rubik, sans-serif;
    transition: all 0.50s linear;
  }
`;
