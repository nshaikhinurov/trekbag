import { useItemsStore } from "../stores/itemsStore";
import { AddItemForm } from "./AddItemForm";
import { ButtonGroup } from "./ButtonGroup";

export const Sidebar = () => {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
};
