import React, { useEffect, useState } from "react";
import { items } from "./items";
import './style.css';

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Beginner", "Intermediate", "Advanced", "Weight Loss","Muscle Gain", "Cardio Fitness", "Strength Training", "Flexibility & Mobility", "Personal Training", "Group Classes"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
       <p className="center-text">Find A Program That Suits You !</p>
      <div className="buttons-container2" id="programs">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container2">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item2">
            <p className="itm-names">{item.name}</p>
            <p className="description">{item.description}</p>
            <p className="duration">{item.duration}</p>
            <p className="cost">{item.cost}</p>
            <p className="cat">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
