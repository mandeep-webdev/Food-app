import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";
const filterBtns = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },

  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];
const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [btnType, setBtnType] = useState("all");

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
    setInput(e.target.value);

    const fileredData = foodItems.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredItems(fileredData);
    // setInput("");
  };

  const handleFilterBtnClick = (type) => {
    if (type === "all") {
      setFilteredItems(foodItems);
      setBtnType("all");
    } else if (type === "breakfast") {
      setFilteredItems(foodItems.filter((food) => food.type === "breakfast"));
      setBtnType("breakfast");
    } else if (type === "lunch") {
      setFilteredItems(foodItems.filter((food) => food.type === "lunch"));
      setBtnType("lunch");
    } else {
      setFilteredItems(foodItems.filter((food) => food.type === "dinner"));
      setBtnType("dinner");
    }
  };
  //console.log(query);
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
            value={input}
            onChange={handleChange}
            placeholder="Search Food..."
          />
        </div>
      </TopSection>
      <FilterBtnsContainer>
        {filterBtns.map((btn) => (
          <Button
            key={btn.name}
            isActive={btnType === btn.type}
            onClick={() => handleFilterBtnClick(btn.type)}
          >
            {btn.name}
          </Button>
        ))}
        {/* <Button onClick={() => filterBtn("all")}>All</Button>
        <Button onClick={() => filterBtn("breakfast")}>Breakfast</Button>
        <Button onClick={() => filterBtn("lunch")}>Lunch</Button>
        <Button onClick={() => filterBtn("dinner")}>Dinner</Button> */}
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
      border: 2px solid #ff4500;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &:focus {
        outline: none;
      }
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
  background-color: ${({ isActive }) => (isActive ? "#FFFFFF" : "#FF6347")};
  color: ${({ isActive }) => (isActive ? "#FF6347" : "#FFFFFF")};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#FFFFFF" : "#FF4500")};
    //background-color: #e43636;
  }
`;
