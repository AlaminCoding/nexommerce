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
    <nav>
      <h2 className="logo">
        <Link href="/">
          <a>NEXOMMERCE</a>
        </Link>
      </h2>
      <div className={`search-bar${openSearch ? " open-search-bar" : ""}`}>
        <input type="text" placeholder="Search your product" />
        <ImSearch className="search-icon" />
        <AiOutlineClose className="close-icon" onClick={closeSearchBar} />
      </div>
      <ul className={`main-menu${openMenu ? " open-main-menu" : ""}`}>
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
      </ul>
      <ul className="menu-icons">
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
        <li className="search-menu-icon">
          <a onClick={openSearchBar}>
            <MdSearch />
          </a>
        </li>
      </ul>
      <div className="toggle-menu">
        {openMenu ? (
          <AiOutlineClose onClick={() => setOpenMenu(false)} />
        ) : (
          <AiOutlineMenu onClick={() => setOpenMenu(true)} />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
