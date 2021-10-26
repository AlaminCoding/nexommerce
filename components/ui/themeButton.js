import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { useState } from "react";
import styled from "styled-components";

// Styles
const ThemeButton = styled.button`
  background-color: white;
  height: 40px;
  width: 40px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0px 0px 6px rgb(143, 143, 143);
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  transition: 0.5s;
  &:hover {
    transform: translateY(-50%) rotate(360deg);
  }
`;

const Theme = () => {
  const [darkActive, setDarkActive] = useState(false);
  const themeChange = () => {
    if (darkActive === false) {
      setDarkActive(true);
    } else {
      setDarkActive(false);
    }
  };
  return (
    <ThemeButton onClick={themeChange}>
      {darkActive ? <RiSunFill /> : <FaMoon />}
    </ThemeButton>
  );
};

export default Theme;
