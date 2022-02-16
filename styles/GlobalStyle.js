import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
      --box-color: ${(props) => props.theme.box};
      --text-color: ${(props) => props.theme.text};
      --menubox-color: ${(props) => props.theme.menuBox};
      --normal-color: #3a3a3a;
      --base-color: #1a8b97;
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
      letter-spacing: 1px;
    }
    a{
      color: var(---text-color);
    }
`;

export const LightTheme = {
  body: "white",
  text: "#3a3a3a",
  box: "rgba(26, 139, 151, 0.2)",
  menuBox: "white",
};

export const DarkTheme = {
  body: "#3A3A3A",
  text: "white",
  box: "#B2F7EF",
  menuBox: "#3A3A3A",
};
