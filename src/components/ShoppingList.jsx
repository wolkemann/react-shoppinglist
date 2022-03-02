import { ShoppingItem } from './ShoppingItem/ShoppingItem';
import { items } from '../db.jsx';
import './ShoppingList.css';

export function ShoppingList() {
  return (
    <section>
      <h2 className="ShoppingList__title">Shopping List</h2>
      <div className="ShoppingList__list">
        {items.map(element => {
          return <ShoppingItem key={element._id} name={element.name.en} />;
        })}
      </div>
    </section>
  );
}
