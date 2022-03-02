import { useState } from 'react';
import { items as database } from './db.jsx';
import './App.css';
import './css/variables.css';

import { ShoppingList } from './components/ShoppingList';
import { Finder } from './components/Finder/Finder.jsx';

function App() {
  return (
    <>
      <main>
        <ShoppingList />
        <Finder />
      </main>
    </>
  );
}

export default App;
