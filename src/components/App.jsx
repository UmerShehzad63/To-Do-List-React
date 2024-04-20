// App.js
import React, { useState } from "react";
import ToDoItem from "./toDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems(prevItems => {
        return [...prevItems, { text: inputText, isChecked: false }];
      });
      setInputText("");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem.text}
              isChecked={todoItem.isChecked}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
