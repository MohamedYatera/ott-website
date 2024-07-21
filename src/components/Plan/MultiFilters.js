import React, { useEffect, useState } from "react";
import { items } from "./items";
import './style.css';
import { useIntl } from 'react-intl';

export default function MultiFilters() {
  const { formatMessage } = useIntl();
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = [
    formatMessage({ id: 'beginner' }),
    formatMessage({ id: 'intermediate' }),
    formatMessage({ id: 'advanced' }),
    formatMessage({ id: 'weightLoss' }),
    formatMessage({ id: 'muscleGain' }),
    formatMessage({ id: 'cardioFitness' }),
    formatMessage({ id: 'strengthTraining' }),
    formatMessage({ id: 'flexibilityMobility' }),
    formatMessage({ id: 'personalTraining' }),
    formatMessage({ id: 'groupClasses' })
  ];

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
    <div className="cont">
      <div className="blur4 main-blur4"></div>
       <p className="center-text">{formatMessage({ id: 'findProgram' })}</p>
       <hr />
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
      <div className="blur3 main-blur3"></div>
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
