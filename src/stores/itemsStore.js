import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: Date.now(),
          name: newItemText,
          packed: false,
        };

        set(({ items }) => ({
          items: [...items, newItem],
        }));
      },
      deleteItem: (id) => {
        set(({ items }) => ({
          items: items.filter((item) => item.id !== id),
        }));
      },
      toggleItem: (id) => {
        set(({ items }) => {
          const updatedItems = items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }

            return item;
          });

          return { items: updatedItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set(({ items }) => {
          const updatedItems = items.map((item) => {
            return { ...item, packed: true };
          });

          return { items: updatedItems };
        });
      },
      markAllAsIncomplete: () => {
        set(({ items }) => {
          const updatedItems = items.map((item) => {
            return { ...item, packed: false };
          });

          return { items: updatedItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
