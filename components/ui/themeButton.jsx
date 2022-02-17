import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { activeLight, activeDark } from "store/themeHandle";
// Styles
const ThemeButton = styled.button`
  background-color: ${(props) =>
    props.themeDark ? "white" : "var(--normal-color)"};
  height: 40px;
  width: 40px;
  border: 1px solid white;
  border-radius: 50%;
  justify-content: center;
  font-size: 22px;
  position: fixed;
  top: 50%;
  left: 20px;
  z-index: 1;
  transform: translateY(-50%);
  transition: 0.5s;
  overflow: hidden;
  .icon-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: ${(props) => (props.themeDark ? "-40px" : "-1px")};
    left: -1px;
    height: 80px;
    width: 40px;
    border-radius: 40px;
    transition: 0.5s;
    span {
      display: flex;
      width: 100%;
      height: 40px;
      align-items: center;
      justify-content: center;
      color: ${(props) => (props.themeDark ? "var(--normal-color)" : "white")};
    }
    .moon {
      font-size: 18px;
    }
  }
`;

const Theme = () => {
  const theme = useSelector((state) => state.activeTheme.value);
  const dispatch = useDispatch();
  const [dark, setDark] = useState(false);
  const themeChange = () => {
    if (theme === "light") {
      dispatch(activeDark());
      setDark(true);
      console.log(dark);
    } else {
      dispatch(activeLight());
      setDark(false);
      console.log(dark);
    }
  };
  return (
    <ThemeButton onClick={themeChange} themeDark={dark}>
      {/* {theme === "dark" ? <RiSunFill /> : <FaMoon />} */}
      <div className="icon-wrapper">
        <span className="moon">
          <FaMoon />
        </span>
        <span>
          <RiSunFill />
        </span>
      </div>
    </ThemeButton>
  );
};

export default Theme;
