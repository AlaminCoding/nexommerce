import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Products from "data/products";
import taka from "assets/img/taka.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "store/productHandle";
import { useState } from "react";
const ProductBoxes = () => {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();

  const addCart = (data) => {
    dispatch(addProduct(data));
    console.log(products);
  };
  return (
    <Row>
      {Products.map((element) => (
        <Col md={2} key={element.id}>
          <ProductBox>
            <ImgBox>
              <img src={element.image} alt="" />
            </ImgBox>
            <h2>{element.name}</h2>
            <OptionBox>
              <Price>
                <img src={taka.src} />
                <h2>{element.price}</h2>
              </Price>
              <CartBtn>
                <button>
                  <AiOutlineMinus />
                </button>
                <button onClick={() => addCart(element)}>
                  <BsFillCartPlusFill />
                </button>
                <button>
                  <AiOutlinePlus />
                </button>
              </CartBtn>
            </OptionBox>
          </ProductBox>
        </Col>
      ))}
    </Row>
  );
};

export default ProductBoxes;

const ProductBox = styled.div`
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 10px;
  h2 {
    font-size: 20px;
    margin-top: 10px;
    color: var(--normal-color);
    font-family: "Acme", serif;
  }
`;

const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  h2 {
    color: var(--base-color);
    font-size: 20px;
    font-family: "Acme", serif;
    margin: 0;
    margin-left: 5px;
  }
  img {
    height: 15px;
    position: relative;
    top: -1px;
  }
`;
const ImgBox = styled.div`
  height: 230px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;
const CartBtn = styled.div`
  background-color: var(--base-color);
  display: flex;
  align-items: center;
  border-radius: 3px;
  button {
    background-color: transparent;
    color: white;
    border: none;
    font-size: 18px;
    padding: 3px 7px;
    border: 1px solid var(--base-color);
    transition: 0.5s;
    svg {
      position: relative;
      top: -4px;
    }
    &:hover {
      background-color: white;
      color: var(--base-color);
    }
  }
`;
