import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [date, setDate] = useState("Mon Jun 21 2027");

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function up() {
    setCount((c) => c + step);
    let value = addDays("06/21/2027", count)
      .toString()
      .replace("00:00:00 GMT+0200 (South Africa Standard Time)", "");
    setDate(value);
  }

  function down() {
    setCount((c) => c - step);
    let value = addDays("06/21/2027", count)
      .toString()
      .replace("00:00:00 GMT+0200 (South Africa Standard Time)", "");
    setDate(value);
  }

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <span></span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={down}>-</button>
        <span>Count: {count}</span>
        <span></span>
        <button onClick={up}>+</button>
      </div>

      <div>
        <h3>
          {count == 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
          {date}
        </h3>
      </div>
    </>
  );
}

export default App;
