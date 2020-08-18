import * as styledComponents from "styled-components";

const { default: styled, css, ThemeProvider } = styledComponents;

export const theme = {
  colors: {
    main: "darkslategray",
    secondary: "black",
    primary: "royalblue",
    success: "limegreen",
    error: "crimson",
    disabled: "darkgrey",
    main_hover: "lightslategray",
    secondary_hover: "darkgray",
    primary_hover: "cornflowerblue",
    success_hover: "lightgreen",
    error_hover: "crlightcoralimson",
    link_hover: "#234161",
  },

  borders: {
    main: "1px solid darkslategray",
    main_hover: "1px solid lightslategray",
  },

  fonts: {
    size_text: "16px",
    size_h1: "24px",
    size_h2: "20px",
  },
};

export { css, ThemeProvider };
export default styled;
