import React, { useState } from "react";
import * as A from "./style";

const TodoList = () => {
  const [items, setItems] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      description: event.target.item.value,
      isComplete: false,
    };
    setItems(items.concat(newItem));
    event.target.item.value = "";
  };

  const handleToggle = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        } else {
          return item;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <A.Wrapper>
        <h3>Todo List</h3>
        <br />

        <form onSubmit={handleSubmit}>
          <A.Input placeholder="할일을 입력해주세요" type="text" name="item" />
          <A.AddBtn>Add Item</A.AddBtn>
        </form>

        <A.Ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => handleToggle(item.id)}
              />
              <A.Span item={item.isComplete}>{item.description}</A.Span>
              <A.DeleteBtn onClick={() => handleDelete(item.id)}>X</A.DeleteBtn>
            </li>
          ))}
        </A.Ul>
      </A.Wrapper>
    </>
  );
};

export default TodoList;
