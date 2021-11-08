import Heading from "components/style/heading";
import Section from "components/style/section";
import Products from "data/products";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
const BestDeal = () => {
  return (
    <Section>
      <Heading>Best Deal</Heading>
      <Row>
        {Products.map((element) => (
          <Col md={2}>
            <ProductBox>
              <img src={element.image} alt="" />
            </ProductBox>
            {/* <p>{element.name}</p>
            <p>{element.price}</p>
            <p>{element.onSell ? element.onSellPercentage + "%" : null}</p>
            <p>{element.onSell ? element.onSellPrice() : null}</p>
            <p>{element.category}</p>
            <p>{element.description}</p>
            <img src={element.image} alt="" /> */}
          </Col>
        ))}
      </Row>
    </Section>
  );
};

export default BestDeal;

const ProductBox = styled.div`
  background-color: #ebedef;
  border-radius: 5px;
  padding: 10px;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
