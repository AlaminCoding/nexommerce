import Navbar from "components/ui/navbar";
import Topnav from "components/ui/topnav";
import Head from "next/head";
import styled from "styled-components";
import { GlobalStyle, LightTheme, DarkTheme } from "styles/GlobalStyle";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.activeTheme.value);
  return (
    <>
      <Head>
        <title>NEXOMMERCE APP</title>
      </Head>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <BodyWrapper>
          <Topnav />
          <Navbar />
          {children}
        </BodyWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
const BodyWrapper = styled.div`
  padding: 0px 100px;
  overflow-x: hidden;
  @media screen and (max-width: 1130px) {
    padding: 0px 20px;
  }
  @media screen and (max-width: 940px) {
    padding: 0px 10px;
  }
`;
