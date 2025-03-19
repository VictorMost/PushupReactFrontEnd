import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1>Pushup Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={decrement} className="counter-button">-</button>
        <button onClick={increment} className="counter-button">+</button>
      </div>
    </div>
  );
}

export default Counter;
