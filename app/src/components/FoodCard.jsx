import React from "react";
import styled from "styled-components";
const FoodCard = ({ foodItem }) => {
  return <Container>{foodItem.name}</Container>;
};

export default FoodCard;

const Container = styled.div``;
