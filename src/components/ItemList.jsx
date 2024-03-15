import { useMemo, useState } from "react";
import Select from "react-select";
import { useItemsStore } from "../stores/itemsStore";
import { EmptyView } from "./EmptyView";

const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export const ItemList = () => {
  const { items, deleteItem, toggleItem } = useItemsStore((state) => ({
    items: state.items,
    deleteItem: state.deleteItem,
    toggleItem: state.toggleItem,
  }));

  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        switch (sortBy) {
          case "packed":
            return b.packed - a.packed;
          case "unpacked":
            return a.packed - b.packed;
          default:
            return 0;
        }
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {sortedItems.length === 0 ? (
        <EmptyView />
      ) : (
        <>
          <section className="sorting">
            <Select
              options={sortingOptions}
              defaultValue={sortingOptions[0]}
              onChange={(option) => {
                setSortBy(option.value);
              }}
            />
          </section>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={deleteItem}
              onToggleItem={toggleItem}
            />
          ))}
        </>
      )}
    </ul>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  const { name, packed } = item;

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        ></input>
        {name}
      </label>

      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
};
