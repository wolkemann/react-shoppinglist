/*
Importing base CSS
*/
import './css/App.css';
import './css/variables.css';

/*
Importing Components
*/
import { Header } from './components/Header/Header.jsx';
import { ShoppingList } from './components/ShoppingList.jsx';
import { Finder } from './components/Finder/Finder.jsx';
import { LangSwitch } from './components/LangSwitch/LangSwitch.jsx';

/*
Importing React API and APP constant
*/
import { useState, useEffect } from 'react';
import { items as listDB } from './db.jsx';

function App() {
  const [shoppingChart, setShoppingChart] = useState([]);
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
        <ShoppingList productList={shoppingChart} />
        <Finder formEventHandler={handleFinderPressEnter} />
        <LangSwitch />
      </main>
    </>
  );
}

export default App;
