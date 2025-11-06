import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const getButtonColor = () => {
    if (count > 0) return "reset-btn pos";
    if (count < 0) return "reset-btn neg";
    return "reset-btn neu";
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Count:</h1>
        <h2 className={`count ${count > 0 ? "positive" : count < 0 ? "negative" : "neutral"}`}>
          {count}
        </h2>

        <div className="buttons">
          <button className="btn decrement" onClick={decrement}>Decrement</button>
          <button className={getButtonColor()} onClick={reset}>Reset</button>
          <button className="btn increment" onClick={increment}>Increment</button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp
