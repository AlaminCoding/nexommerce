import { first_category, mid_category, last_category } from "data/category";
import { useState } from "react";
import { VscChevronRight, VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { closeCategory } from "store/categoryHandle";
import styled from "styled-components";

const Category = () => {
  const [midList, setMidList] = useState([]);
  const [lastList, setLastList] = useState([]);
  // Category Open and Close
  const openList = useSelector((state) => state.openCategory.value);
  const dispatch = useDispatch();

  const getMidList = (id) => {
    const newMidList = mid_category.filter(
      (element) => element.parent_id === id
    );
    if (midList.length && id === midList[0].parent_id) {
      setMidList([]);
      setLastList([]);
      renderMidList();
    } else {
      setMidList(newMidList);
      setLastList([]);
      renderMidList();
    }
  };

  const renderMidList = () => {
    return midList.length ? (
      <CommonCategory categoryType={"mid-category"}>
        <PhoneCategory>
          <VscArrowLeft onClick={closeMidList} />
          <VscChromeClose onClick={closeAllList} />
        </PhoneCategory>
        {midList.map((element) => (
          <CommonList
            key={element.id}
            onClick={element.have_child ? () => getLastList(element.id) : null}
            style={
              lastList.length && lastList[0].parent_id === element.id
                ? { backgroundColor: "white" }
                : null
            }
          >
            {element.name}
            {element.have_child ? (
              <VscChevronRight
                style={
                  lastList.length && lastList[0].parent_id === element.id
                    ? {
                        transform: "translateX(10px)",
                        fontSize: "22px",
                        transition: "0.5s",
                      }
                    : null
                }
              />
            ) : null}
          </CommonList>
        ))}
      </CommonCategory>
    ) : null;
  };
  const getLastList = (id) => {
    const newMidList = last_category.filter(
      (element) => element.parent_id === id
    );
    if (lastList.length && id === lastList[0].parent_id) {
      setLastList([]);

      renderLastList();
    } else {
      setLastList(newMidList);
      renderLastList();
    }
  };
  const renderLastList = () => {
    return lastList.length ? (
      <CommonCategory categoryType={"last-category"}>
        <PhoneCategory>
          <VscArrowLeft onClick={closeLastList} />
          <VscChromeClose onClick={closeAllList} />
        </PhoneCategory>
        {lastList.map((element) => (
          <CommonList key={element.id}>{element.name}</CommonList>
        ))}
      </CommonCategory>
    ) : null;
  };
  const closeMidList = () => {
    setMidList([]);
  };
  const closeLastList = () => {
    setLastList([]);
  };
  const closeAllList = () => {
    setMidList([]);
    setLastList([]);
  };

  // Render
  return (
    <MainCategory openList={openList}>
      <PhoneCategory color={"true"}>
        <VscChromeClose onClick={() => dispatch(closeCategory())} />
      </PhoneCategory>
      {first_category.map((element) => (
        <FirstList
          key={element.id}
          onClick={element.have_child ? () => getMidList(element.id) : null}
          activeList={
            midList.length && midList[0].parent_id === element.id ? true : false
          }
        >
          {element.name}
          {element.have_child ? (
            <VscChevronRight
              style={
                midList.length && midList[0].parent_id === element.id
                  ? {
                      transform: "translateX(10px)",
                      fontSize: "22px",
                      transition: "0.5s",
                    }
                  : null
              }
            />
          ) : null}
        </FirstList>
      ))}
      {renderMidList()}
      {renderLastList()}
    </MainCategory>
  );
};

export default Category;

// Styles
const MainCategory = styled.ul`
  position: relative;
  width: 300px;
  height: 100%;
  float: left;
  background-color: var(--box-color);
  margin-right: 20px;
  padding: 0px 10px;
  @media screen and (max-width: 700px) {
    border-top: 1px solid #1a8b97;
    position: absolute;
    left: ${(props) => (props.openList ? 0 : "-103%")};
    z-index: 2;
    background-color: white;
    width: 100%;
    transition: 0.5s;
  }
`;

const FirstList = styled.li`
  padding: 10px 25px;
  margin-top: 10px;
  background-color: ${(props) =>
    props.activeList ? "#1a8b97" : "rgba(26, 139, 151, 0.2)"};
  color: ${(props) => (props.activeList ? "white" : "black")};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  :hover {
    background-color: rgba(26, 139, 151, 0.4);
  }
`;

const CommonCategory = styled.ul`
  position: absolute;
  background-color: #1a8b97;
  top: 0;
  right: ${(props) => {
    switch (props.categoryType) {
      case "mid-category":
        return "-310px";
      case "last-category":
        return "-620px";
    }
  }};
  width: 300px;
  height: 100%;
  padding: 0px 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  @media screen and (max-width: 970px) {
    right: ${(props) => {
      switch (props.categoryType) {
        case "mid-category":
          return "-150px";
        case "last-category":
          return "-300px";
      }
    }};
  }
  @media screen and (max-width: 700px) {
    right: 0;
    width: 100%;
  }
`;

const CommonList = styled.li`
  padding: 10px 25px;
  margin-top: 10px;
  background-color: rgb(255, 255, 255, 0.8);
  color: black;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  :hover {
    background-color: white;
  }
`;

const PhoneCategory = styled.li`
  justify-content: space-between;
  font-size: 30px;
  padding: 10px 0px;
  color: ${(props) => (props.color ? "black" : "white")};
  display: none;
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;
