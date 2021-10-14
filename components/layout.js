import Navbar from "components/ui/navbar.js";
import Topnav from "components/ui/topnav";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>NEXOMMERCE APP</title>
      </Head>
      <div className="body-wrapper">
        <Topnav />
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
