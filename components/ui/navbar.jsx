import Link from "next/link";
import { ImSearch } from "react-icons/im";
import {
  MdAccountCircle,
  MdShoppingCart,
  MdFavorite,
  MdSearch,
} from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
// Render
const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [count, setCount] = useState(0);
  const products = useSelector((state) => state.products.value);

  const openSearchBar = () => {
    setOpenSearch(true);
  };
  const closeSearchBar = () => {
    setOpenSearch(false);
  };
  const openNav = () => {
    setOpenMenu(true);
    document.body.style.overflow = "hidden";
  };
  const closeNav = () => {
    setOpenMenu(false);
    document.body.style.overflow = "visible";
  };

  useEffect(() => {
    let number = 0;
    for (let i = 0; i < products.length; i++) {
      number = number + products[i].count;
    }
    setCount(number);
  });
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
              {count > 0 ? <span>{count}</span> : null}
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
          <AiOutlineClose onClick={() => closeNav()} />
        ) : (
          <AiOutlineMenu onClick={() => openNav()} />
        )}
      </ToggleMenu>
    </MainNav>
  );
};
export default Navbar;

// Styles
const colors = {
  purple: "#5DADE2",
  blue: "#1a8b97",
};

const MainNav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 975px) {
    height: 70px;
  }
`;

const Logo = styled.h2`
  font-family: "Acme", sans-serif;
  margin: 0;
  a {
    color: ${colors.purple};
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
    border: 1px solid ${colors.blue};
    border-radius: 5px;
    background-color: white;
    font-family: "Kurale", serif;
    font-size: 18px;
    padding: 0px 40px 0px 20px;
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
    top: 50%;
    left: 0;
    width: 100%;
    height: 85%;
    border-radius: 5px;
    transform: translateY(-50%);
    padding: 10px 60px 10px 20px;
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
    top: 110px;
    right: ${(props) => (props.openMainMenu ? "0%" : "-100%")};
    background-color: var(--menubox-color);
    height: 88vh;
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
      font-size: 26px;
      transition: 0.5s;
      position: relative;
      span {
        position: absolute;
        top: 21px;
        left: 11px;
        height: 20px;
        width: 20px;
        background-color: var(--base-color);
        font-size: 14px;
        color: white;
        border-radius: 50%;
        font-family: "Kurale", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
    font-size: 26px;
    cursor: pointer;
  }
  @media screen and (max-width: 650px) {
    display: block;
  }
`;
