import { ShoppingItem } from './ShoppingItem/ShoppingItem';
import { items } from '../db.jsx';
import './ShoppingList.css';

export function ShoppingList() {
  return (
    <section>
      <h1 className="ShoppingList__title">Shopping List</h1>
      {items.map(element => {
        return <ShoppingItem key={element._id} name={element.name.en} />;
      })}
    </section>
  );
}
