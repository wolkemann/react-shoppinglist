import './ShoppingList.css';
import mama from './homeIcon-trimmy.png';

export function ShoppingList({ currentShoppingItems, handleSingleItem }) {
  return (
    <section>
      <div className="ShoppingList__list">
        {currentShoppingItems.length === 0 ? (
          <div>
            <img src={mama} className="ShoppingList__mama" />
            <p className="ShoppingList__emptyText">
              Nothing to buy, Mama si angry.
            </p>
          </div>
        ) : (
          currentShoppingItems.map(element => {
            return (
              <div
                key={element.id}
                className="ShoppingItem"
                onClick={() => {
                  handleSingleItem(() => {
                    return currentShoppingItems.filter(a => {
                      console.log(a.id, element.id);
                      return a.id !== element.id;
                    });
                  });
                }}
              >
                {element.name}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
