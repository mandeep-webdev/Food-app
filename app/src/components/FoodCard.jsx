import React from "react";
import styled from "styled-components";
import { BASE_URL, Button } from "../App";
const FoodCard = ({ foodItem }) => {
  const { name, image, text, price } = foodItem;
  return (
    <Container>
      <div className="food_img">
        <img src={BASE_URL + image} alt="food-image" />
      </div>
      <div className="food_info">
        <div className="info">
          <h3>{name}</h3>
          <p>{text}</p>
        </div>
        <Button>${price.toFixed(2)}</Button>
      </div>
    </Container>
  );
};

export default FoodCard;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin: 10px;
  width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 150px; */
  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    .info {
      width: 168px;
      height: 89px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    p {
      font-size: 12px;
    }
  }
  Button {
    font-size: 14px;
  }
`;
