import { useItemsStore } from "../stores/itemsStore";
import { Counter } from "./Counter";
import { Logo } from "./Logo";

export const Header = () => {
  const { totalNumberOfItems, numberOfItemsPacked } = useItemsStore(
    (state) => ({
      totalNumberOfItems: state.items.length,
      numberOfItemsPacked: state.items.filter((item) => item.packed).length,
    })
  );

  return (
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={numberOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
};
