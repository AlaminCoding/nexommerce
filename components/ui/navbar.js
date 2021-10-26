import Link from "next/link";
import { ImSearch } from "react-icons/im";
import {
  MdAccountCircle,
  MdShoppingCart,
  MdFavorite,
  MdSearch,
} from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";

// Render
const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const openSearchBar = () => {
    setOpenSearch(true);
  };
  const closeSearchBar = () => {
    setOpenSearch(false);
  };

  return (
    <MainNav>
      <Logo>
        <Link href="/">
          <a>NEXOMMERCE</a>
        </Link>
      </Logo>
      <SearchBar openSearch={openSearch}>
        <input type="text" placeholder="Search your product" />
        <SearchIcon>
          <ImSearch />
        </SearchIcon>
        <CloseIcon>
          <AiOutlineClose onClick={closeSearchBar} />
        </CloseIcon>
      </SearchBar>
      <MainMenu openMainMenu={openMenu}>
        <li>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a>T&C</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </MainMenu>
      <MenuIcons>
        <li>
          <Link href="/account">
            <a>
              <MdAccountCircle />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>
              <MdShoppingCart />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/favourite">
            <a>
              <MdFavorite />
            </a>
          </Link>
        </li>
        <SearchMenuIcon>
          <a onClick={openSearchBar}>
            <MdSearch />
          </a>
        </SearchMenuIcon>
      </MenuIcons>
      <ToggleMenu>
        {openMenu ? (
          <AiOutlineClose onClick={() => setOpenMenu(false)} />
        ) : (
          <AiOutlineMenu onClick={() => setOpenMenu(true)} />
        )}
      </ToggleMenu>
    </MainNav>
  );
};
export default Navbar;

// Styles
const colors = {
  purple: "#6d07a7",
  blue: "#1a8b97",
};

const MainNav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  font-family: "Acme", sans-serif;
  margin: 0;
  a {
    color: ${colors.blue};
    text-decoration: none;
    font-weight: 600;
    @media screen and (max-width: 975px) {
      font-size: 20px;
    }
  }
`;

const SearchBar = styled.div`
  width: 30%;
  height: 50px;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.purple};
    border-radius: 5px;
    background-color: rgba(109, 7, 167, 0.1);
    font-family: "Kurale", serif;
    font-size: 18px;
    padding: 0px 20px;
  }
  input:focus {
    outline: none;
    border: 1px solid ${colors.blue};
  }
  svg {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    font-size: 22px;
    color: ${colors.blue};
    cursor: pointer;
  }
  @media screen and (max-width: 975px) {
    display: ${(props) => (props.openSearch ? "block" : "none")};
    position: absolute;
    background-color: white;
    top: 40px;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 20px;
    padding-right: 60px;
  }
`;

const CloseIcon = styled.div`
  display: none;
  @media screen and (max-width: 975px) {
    display: block;
    svg {
      right: 18px;
      font-size: 30px;
    }
  }
`;

const SearchIcon = styled.div`
  @media screen and (max-width: 975px) {
    svg {
      right: 75px;
    }
  }
`;

const MainMenu = styled.ul`
  display: flex;
  li {
    margin: 0px 10px;
    a {
      text-transform: uppercase;
      color: black;
      font-weight: 600;
      text-decoration: none;
      transition: 0.5s;
    }
    a:hover {
      color: ${colors.blue};
    }
  }
  @media screen and (max-width: 650px) {
    position: fixed;
    top: 140px;
    right: ${(props) => (props.openMainMenu ? "0%" : "-100%")};
    background-color: white;
    height: 86vh;
    width: 100%;
    flex-direction: column;
    padding-top: 25px;
    border-top: 1px solid black;
    z-index: 999;
    transition: 0.5s;
    li {
      margin: 5px;
      padding: 10px;
    }
  }
`;

const MenuIcons = styled.ul`
  display: flex;
  li {
    margin-left: 15px;
    a {
      color: black;
      font-size: 26px;
      transition: 0.5s;
    }
    a:hover {
      color: ${colors.purple};
    }
  }
`;

const SearchMenuIcon = styled.li`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 975px) {
    display: block;
  }
`;

const ToggleMenu = styled.div`
  display: none;
  svg {
    color: black;
    font-size: 26px;
    cursor: pointer;
  }
  @media screen and (max-width: 650px) {
    display: block;
  }
`;
