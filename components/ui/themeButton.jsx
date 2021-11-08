import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { activeLight, activeDark } from "store/themeHandle";
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
  z-index: 1;
  transform: translateY(-50%);
  transition: 0.5s;
  &:hover {
    transform: translateY(-50%) rotate(360deg);
  }
`;

const Theme = () => {
  const theme = useSelector((state) => state.activeTheme.value);
  const dispatch = useDispatch();

  const themeChange = () => {
    if (theme === "light") {
      dispatch(activeDark());
    } else {
      dispatch(activeLight());
    }
  };
  return (
    <ThemeButton onClick={themeChange}>
      {theme === "dark" ? <RiSunFill /> : <FaMoon />}
    </ThemeButton>
  );
};

export default Theme;
