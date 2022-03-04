import { ShoppingItem } from './ShoppingItem/ShoppingItem';
import './ShoppingList.css';
import mama from '../components/homeIcon-trimmy.png';

export function ShoppingList({ productList }) {
  return (
    <section>
      <div className="ShoppingList__list">
        {productList.length === 0 ? (
          <p>
            <img src={mama} className="ShoppingList__mama" />
            Nothing to buy, Mama si angry.
          </p>
        ) : (
          productList.map(element => {
            return <ShoppingItem key={element.id} name={element.name} />;
          })
        )}
      </div>
    </section>
  );
}
