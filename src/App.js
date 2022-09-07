import Header from "./components/NavBar";
import Logo from "./components/logo";
import ItemListContainer from "./components/ItemListContainer";

import './App.css';


export default function App() {
  return (
    <div>
      <Logo />
      <Header></Header>
      <ItemListContainer greeting="Bienvenido a Huemul Clothes"></ItemListContainer>
      
    </div>
  );
}




/* import React, { useState } from 'react'; */

/* function ItemCount({ stock, initial,  onAdd }) {
  return (
    <>

    </>
  )
} */

/* 
function App() {
  // Declara una nueva variable de estado, la cual llamaremos “count”  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
} */

/* export default App; */