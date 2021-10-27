import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
      --box-color: ${(props) => props.theme.box};
      --text-color: ${(props) => props.theme.text};
      --menubox-color: ${(props) => props.theme.menuBox}
    }
    body{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        transition: all 0.3s;
    }
    h2,p {
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    a,p,li {
      font-family: "Kurale", serif;
    }
    a{
      color: var(---text-color);
    }
`;

export const LightTheme = {
  body: "white",
  text: "black",
  box: "rgba(26, 139, 151, 0.2)",
  menuBox: "white",
};

export const DarkTheme = {
  body: "black",
  text: "white",
  box: "#5DADE2",
  menuBox: "black",
};
