import React, {useState} from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState(false)

  function onAddItem() {
    setAddItem((addItem) => !addItem)
  }

   
  const myItem = addItem ? "in-cart" : ""
  const color = addItem ? "purple" : ""

  return (
    <li className={myItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={onAddItem}  style={{background: color}} className="add">
        {addItem ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
