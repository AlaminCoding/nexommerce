import { first_category, mid_category, last_category } from "data/category";
import { useState } from "react";
import { VscChevronRight, VscArrowLeft, VscChromeClose } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { closeCategory, openCategory } from "store/categoryHandle";
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
      <ul className="common-category mid-category">
        <li className="phone-category">
          <VscArrowLeft onClick={closeMidList} />
          <VscChromeClose onClick={closeAllList} />
        </li>
        {midList.map((element) => (
          <li
            key={element.id}
            className="common-list"
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
                    ? { transform: "translateX(10px)", fontSize: "22px" }
                    : null
                }
              />
            ) : null}
          </li>
        ))}
      </ul>
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
      <ul className="common-category last-category">
        <li className="phone-category">
          <VscArrowLeft onClick={closeLastList} />
          <VscChromeClose onClick={closeAllList} />
        </li>
        {lastList.map((element) => (
          <li key={element.id} className="common-list">
            {element.name}
          </li>
        ))}
      </ul>
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
  return (
    <ul
      className={
        openList ? "main-category-open main-category" : "main-category"
      }
    >
      <li className="phone-category text-dark">
        <VscChromeClose onClick={() => dispatch(closeCategory())} />
      </li>
      {first_category.map((element) => (
        <li
          className="first-list"
          key={element.id}
          onClick={element.have_child ? () => getMidList(element.id) : null}
          style={
            midList.length && midList[0].parent_id === element.id
              ? { backgroundColor: "#1a8b97", color: "white" }
              : null
          }
        >
          {element.name}
          {element.have_child ? (
            <VscChevronRight
              style={
                midList.length && midList[0].parent_id === element.id
                  ? { transform: "translateX(10px)", fontSize: "22px" }
                  : null
              }
            />
          ) : null}
        </li>
      ))}
      {renderMidList()}
      {renderLastList()}
    </ul>
  );
};

export default Category;
