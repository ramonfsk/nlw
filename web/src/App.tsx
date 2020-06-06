import React , { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
       <Header title={ `Contador: ${counter}` } />
       <button onClick={ handleButtonClick }>Aumentar</button>
    </div>
  );
}

export default App;

// JSX: Sintaxe de XML dentro do JavaScript
