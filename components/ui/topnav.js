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
import styles from "styles/Topnav.module.scss";
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
  useEffect(() => {
    fetch("https://ip.nf/me.json")
      .then((response) => response.json())
      .then((data) => setCountry(data.ip.country));
  }, []);
  return (
    <div className={styles.top_nav}>
      <ul
        className={
          openNav
            ? `${styles.top_social} ${styles.top_social_open}`
            : `${styles.top_social}`
        }
      >
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
      </ul>
      <div className={styles.top_social_toggle}>{navToggle()}</div>
      <div className={styles.top_nav_right}>
        <p>
          <FaPhoneSquareAlt />
          0123-456789
        </p>
        <p>
          <MdLocationOn />
          {country}
        </p>
      </div>
    </div>
  );
};

export default Topnav;
