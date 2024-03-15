import { useItemsStore } from "../stores/itemsStore";
import { Button } from "./Button";

export const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button
        buttonType="secondary"
        label={"Mark all as complete"}
        onClick={markAllAsComplete}
      />
      <Button
        buttonType="secondary"
        label={"Mark all as incomplete"}
        onClick={markAllAsIncomplete}
      />
      <Button
        buttonType="secondary"
        label={"Reset to initial"}
        onClick={resetToInitial}
      />
      <Button
        buttonType="secondary"
        label={"Remove all items"}
        onClick={removeAllItems}
      />
    </section>
  );
};
