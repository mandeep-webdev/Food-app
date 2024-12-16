import React from "react";
import styled from "styled-components";
import Spinner from "../Spinner/Spinner";
import FoodCard from "../FoodCard";
const SearchResult = ({ isLoading, data }) => {
  return (
    <FoodCardsContainer>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
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
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
`;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 0;
  gap: 16px;
  margin-left: 40px;
`;
