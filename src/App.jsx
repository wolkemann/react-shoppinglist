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
    localStorage.setItem('shoppingChart', JSON.stringify(shoppingChart));
  }, [shoppingChart]);

  function handleFinderPressEnter(e) {
    e.preventDefault();
    const newArray = e.target.addInput.value
      .trim()
      .split(',')
      .map(element => {
        return { id: shoppingChart.length + 1, name: element };
      });

    const filteredArray = newArray.map(toCompare => {
      return shoppingChart.filter(element => toCompare.name !== element.name);
    });

    setShoppingChart([...filteredArray, ...shoppingChart]);
    e.target.reset();
  }

  return (
    <>
      <Header />
      <main>
        <ShoppingList
          currentShoppingItems={shoppingChart}
          handleSingleItem={setShoppingChart}
        />
        <Finder formEventHandler={handleFinderPressEnter} />
      </main>
    </>
  );
}

export default App;
