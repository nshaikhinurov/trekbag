import { useRef, useState } from "react";
import { Button } from "./Button";

export const AddItemForm = ({ onAddItem }) => {
  const inputRef = useRef();
  const [itemText, setItemText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemText) {
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        autoFocus
        ref={inputRef}
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
      />
      <Button label="Add to list" />
    </form>
  );
};
