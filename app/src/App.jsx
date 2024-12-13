import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setFoodItems(data);
        setFilteredItems(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    setTimeout(fetchData, 1000);

    // fetchData();
  }, []);
  // console.log(foodItems);

  const handleChange = (e) => {
    setQuery(e.target.value);

    const fileredData = foodItems.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(query)
    );

    setFilteredItems(fileredData);
  };
  console.log(query);
  // setFilteredItems(fileredData);
  return (
    <Container>
      <TopSection>
        <div className="logo">
          <img src="/logo.svg" alt="logo-image" />
        </div>
        <div className="search">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search Food..."
          />
        </div>
      </TopSection>
      <FilterBtnsContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterBtnsContainer>
      <SearchResult isLoading={isLoading} data={filteredItems} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopSection = styled.section`
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px;

  .search {
    input {
      background-color: transparent;
      border: 2px solid #d35353;
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
  padding-bottom: 30px;
`;
export const Button = styled.button`
  width: 96px;
  padding: 6px 12px;
  background-color: #ff4343;
  color: white;
  border-radius: 5px;
  border: none;
`;
