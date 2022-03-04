import { useState } from 'react';
import { items as listDB } from './db.jsx';
import './css/App.css';
import './css/variables.css';

import { Header } from './components/Header/Header.jsx';
import { ShoppingList } from './components/ShoppingList.jsx';
import { Finder } from './components/Finder/Finder.jsx';
import { LangSwitch } from './components/LangSwitch/LangSwitch.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <ShoppingList productList={listDB} />
        <Finder />
        <LangSwitch />
      </main>
    </>
  );
}

export default App;
