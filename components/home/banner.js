import Category from "components/block/category";
import Slider from "components/block/slider";
import { useDispatch } from "react-redux";
import { openCategory } from "store/categoryHandle";
import { AiOutlineMenuFold } from "react-icons/ai";
import styled from "styled-components";

// Render Function
const Banner = () => {
  // const openList = useSelector((state) => state.openCategory.value);
  const dispatch = useDispatch();
  return (
    <BannerStyle>
      <ToggleCategory>
        <AiOutlineMenuFold onClick={() => dispatch(openCategory())} />
      </ToggleCategory>
      <Category />
      <Slider />
    </BannerStyle>
  );
};

export default Banner;

// Styles
const BannerStyle = styled.section`
  height: 600px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 700px) {
    height: 78vh;
  }
`;

const ToggleCategory = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  cursor: pointer;
  display: none;
  color: black;
  svg {
    background-color: white;
    font-size: 30px;
    border-radius: 5px;
    padding: 5px;
  }
  @media screen and (max-width: 700px) {
    display: block;
  }
`;
