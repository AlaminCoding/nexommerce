import {
  FaPhoneSquareAlt,
  FaShareAltSquare,
  FaWindowClose,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiYoutubetv } from "react-icons/si";
import { useEffect, useState } from "react";

// Styles
import styled from "styled-components";

const TopnavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  background-color: var(--box-color);
  border-radius: 0px 0px 5px 5px;
  position: relative;
  p {
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: var(--normal-color);
    svg {
      margin-right: 5px;
      font-size: 18px;
    }
    @media screen and (max-width: 400px) {
      margin-left: 5px;
    }
  }
`;

const TopSocial = styled.ul`
  display: flex;
  li {
    margin-right: 10px;
    a {
      color: var(--normal-color);
      text-decoration: none;
      font-size: 25px;
      display: flex;
      align-items: center;
    }
  }
  @media screen and (max-width: 470px) {
    position: absolute;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 81%;
    background-color: rgba(26, 139, 151);
    border-radius: 0px 0px 5px 5px;
    /* top: -40px; */
    top: ${(props) => (props.openNav ? "0" : "-40px")};
    right: 0;
    transition: 0.5s;
    li {
      margin-right: 0;
      a {
        color: white;
      }
    }
  }
`;

const TopnavRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopSocialToggle = styled.div`
  display: none;
  cursor: pointer;
  svg {
    font-size: 25px;
    color: var(--normal-color);
  }
  @media screen and (max-width: 470px) {
    display: block;
  }
`;

// Render Function
const Topnav = () => {
  const [country, setCountry] = useState("");
  const [openNav, setOpenNav] = useState(false);

  const openTopNav = () => {
    setOpenNav(true);
    console.log(openNav);
  };
  const closeTopNav = () => {
    setOpenNav(false);
    console.log(openNav);
  };

  const navToggle = () => {
    return openNav ? (
      <FaWindowClose onClick={() => closeTopNav()} />
    ) : (
      <FaShareAltSquare onClick={() => openTopNav()} />
    );
  };
  // useEffect(() => {
  //   fetch("https://ip.nf/me.json")
  //     .then((response) => response.json())
  //     .then((data) => setCountry(data.ip.country));
  // }, []);
  return (
    <TopnavStyle>
      <TopSocial openNav={openNav}>
        <li>
          <a href="#">
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="#">
            <SiYoutubetv />
          </a>
        </li>
      </TopSocial>
      <TopSocialToggle>{navToggle()}</TopSocialToggle>
      <TopnavRight>
        <p>
          <FaPhoneSquareAlt />
          0123-456789
        </p>
        <p>
          <MdLocationOn />
          Bangladesh
        </p>
      </TopnavRight>
    </TopnavStyle>
  );
};

export default Topnav;
