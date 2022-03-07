import './ShoppingList.css';
import mama from './homeIcon-trimmy.png';

export function ShoppingList({ currentShoppingItems, handleSingleItem }) {
  return (
    <section className="ShoppingList__list">
      {currentShoppingItems.length === 0 ? (
        <figure>
          <img src={mama} className="ShoppingList__mama" alt="Mama is angry" />
          <figcaption className="ShoppingList__emptyText">
            Nothing to buy, Mama si angry.
          </figcaption>
        </figure>
      ) : (
        currentShoppingItems.map(element => {
          return (
            <div
              key={element.id}
              className="ShoppingItem"
              onClick={() => {
                handleSingleItem(() => {
                  return currentShoppingItems.filter(a => {
                    a.id !== element.id;
                  });
                });
              }}
            >
              {element.name}
            </div>
          );
        })
      )}
    </section>
  );
}
