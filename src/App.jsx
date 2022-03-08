/*
Importing base CSS
*/
import './css/App.css';
import './css/variables.css';

/*
Importing Components
*/
import { Header } from './components/Header/Header.jsx';
import { Finder } from './components/Finder/Finder.jsx';
import { ShoppingList } from './components/ShoppingList/ShoppingList.jsx';

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
    console.log(shoppingChart);
    localStorage.setItem('shoppingChart', JSON.stringify(shoppingChart));
  }, [shoppingChart]);

  return (
    <>
      <Header />
      <main>
        <ShoppingList
          currentShoppingItems={shoppingChart}
          handleSingleItem={setShoppingChart}
        />
        <Finder
          shoppingChart={shoppingChart}
          setShoppingChart={setShoppingChart}
        />
      </main>
    </>
  );
}

export default App;
