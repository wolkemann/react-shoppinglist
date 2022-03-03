import { ShoppingItem } from './ShoppingItem/ShoppingItem';
import './ShoppingList.css';

export function ShoppingList({ productList }) {
  return (
    <section>
      <div className="ShoppingList__list">
        {productList.map(element => {
          return <ShoppingItem key={element._id} name={element.name.en} />;
        })}
      </div>
    </section>
  );
}
