// ToDoItem.js
import React from "react";

function ToDoItem(props) {
  function handleCheckboxChange() {
    props.deleteItem(props.id);
  }

  return (
    <div>
      <li style={{ listStyle: "none" }}>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={handleCheckboxChange}
        />
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
