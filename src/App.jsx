/*
Importing base CSS and Images
*/
import './css/App.css';

import './css/variables.css';
import mama from './components/homeIcon-trimmy.png';

/*
Importing Components
*/
import { Header } from './components/Header/Header.jsx';
import { Finder } from './components/Finder/Finder.jsx';

/*
Importing React API and APP constant
*/
import { useState, useEffect } from 'react';
import { items as listDB } from './db.jsx';

function App() {
  const [shoppingChart, setShoppingChart] = useState(() => {
    const saved = localStorage.getItem('shoppingChart');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingChart', JSON.stringify(shoppingChart));
  }, [shoppingChart]);

  function handleFinderPressEnter(e) {
    e.preventDefault();
    setShoppingChart([
      { id: shoppingChart.length + 1, name: e.target.addInput.value },
      ...shoppingChart,
    ]);
    e.target.reset();
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="ShoppingList__list">
            {shoppingChart.length === 0 ? (
              <div>
                <img src={mama} className="ShoppingList__mama" />
                <p className="ShoppingList__emptyText">
                  Nothing to buy, Mama si angry.
                </p>
              </div>
            ) : (
              shoppingChart.map(element => {
                return (
                  <div
                    key={element.id}
                    className="ShoppingItem"
                    onClick={() => {
                      setShoppingChart(() => {
                        return shoppingChart.filter(a => {
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
        <Finder formEventHandler={handleFinderPressEnter} />
      </main>
    </>
  );
}

export default App;
