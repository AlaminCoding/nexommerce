import Link from "next/link";
import { ImSearch } from "react-icons/im";
import styles from "styles/Navbar.module.scss";
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
    <nav className={styles.main_nav}>
      <h2 className={styles.logo}>
        <Link href="/">
          <a>NEXOMMERCE</a>
        </Link>
      </h2>
      <div
        className={`${styles.search_bar} ${
          openSearch ? styles.open_search_bar : ""
        }`}
      >
        <input type="text" placeholder="Search your product" />
        <ImSearch className={styles.search_icon} />
        <AiOutlineClose
          className={styles.close_icon}
          onClick={closeSearchBar}
        />
      </div>
      <ul
        className={`${styles.main_menu} ${
          openMenu ? styles.open_main_menu : ""
        }`}
      >
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
      <ul className={styles.menu_icons}>
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
        <li className={styles.search_menu_icon}>
          <a onClick={openSearchBar}>
            <MdSearch />
          </a>
        </li>
      </ul>
      <div className={styles.toggle_menu}>
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
