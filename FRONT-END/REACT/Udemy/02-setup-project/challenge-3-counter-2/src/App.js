import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date(" Feb 14 2026 ");
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        <span>step: {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <span>count: {count}</span>
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is: "
            : count > 0
              ? `${count} The Day from Today Is: `
              : `${Math.abs(count)} Days ago was: `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
