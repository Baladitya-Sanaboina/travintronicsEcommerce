import "./index.css";
import React, { useState } from "react";

const category = {
  Mens: "Mens",
  Womens: "Womens",
  Electronics: "Electronics",
  Jewlery: "Jewlery",
};

const FilterGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  return (
    <div className="filters-group-container">
      <input
        className="input-box-container"
        type="text"
        name="search"
        placeholder="Search..."
      />

      <div>
        <label htmlFor="category" className="dropdown-label">
          Select a Category
        </label>

        <select id="category" value={selectedCategory} onChange={handleChange}>
          {Object.keys(category).map((key) => (
            <option key={key} value={key}>
              {category[key]}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterGroup;
