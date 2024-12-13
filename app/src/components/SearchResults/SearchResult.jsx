import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";
import FoodCard from "../FoodCard";
const SearchResult = ({ isLoading, data }) => {
  return (
    <FoodCardsContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <CardsContainer>
          {data.map((foodItem) => (
            <FoodCard foodItem={foodItem} key={foodItem.name} />
          ))}
        </CardsContainer>
      )}
    </FoodCardsContainer>
  );
};

export default SearchResult;
const FoodCardsContainer = styled.section`
  background-image: url("/bg.png");
  background-size: cover;
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  /* border: 1px solid red; */
  padding: 30px 0;
`;
