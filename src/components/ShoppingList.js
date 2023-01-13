import React, { useState }from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCartegory, setSelectedCartegory] = useState("All");

  function handleCartegoryChange(e) {
    setSelectedCartegory(e.target.value);
  }

  const itemDisplay = items.filter((item) => {
    if (selectedCartegory === "All") return true;
    
     return item.cartegory === selectedCartegory;
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCartegoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
