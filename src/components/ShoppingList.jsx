import { ShoppingItem } from './ShoppingItem/ShoppingItem';
import { items } from '../db.jsx';
import './ShoppingList.css';

export function ShoppingList() {
  return (
    <section>
      <div className="ShoppingList__list">
        {items.map(element => {
          return <ShoppingItem key={element._id} name={element.name.en} />;
        })}
      </div>
    </section>
  );
}
