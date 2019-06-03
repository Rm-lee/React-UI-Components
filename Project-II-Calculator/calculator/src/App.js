import React from 'react';
import Characters from './components/ButtonComponents/button'
import ActionButton from './components/ButtonComponents/ActionButton'
import Symbols from './components/ButtonComponents/Symbols'
import CalculateDisplay from './components/DisplayComponents/CalculatorDisplay';
import './App.css';

const App = () => {
  return (
    <div className="calculator">
      <CalculateDisplay />
    <div className="calc-display">
      
      <div className="number-display">
        <ActionButton />
        <Characters />
      </div>
      <div className="symbol-container">
        <Symbols />
      </div>
    </div>
    </div>
  );
};

export default App;
