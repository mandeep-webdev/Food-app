import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

const BASE_URL = "http://localhost:9000/";

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setFoodItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(fetchData, 1000);

    // fetchData();
  }, []);
  // console.log(foodItems);
  return (
    <Container>
      <TopSection>
        <div className="logo">
          <img src="/logo.svg" alt="logo-image" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food..." />
        </div>
      </TopSection>
      <FilterBtnsContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterBtnsContainer>
      <SearchResult isLoading={isLoading} data={foodItems} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopSection = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid #ff0909;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterBtnsContainer = styled.section`
  display: flex;
  gap: 12px;
  justify-content: center;
  padding-bottom: 40px;
`;
const Button = styled.button`
  width: 96px;
  padding: 6px 12px;
  background-color: #ff4343;
  color: white;
  border-radius: 5px;
  border: none;
`;
