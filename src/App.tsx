import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const double = { count: count * 2, randomNumber: Math.random().toFixed(2) };

  useEffect(() => {
    console.log(double, "has changed");
  }, [double]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Double is {double.count}</p>
      </div>

      <div className="card">
        <button onClick={() => setOtherCount((count) => count + 1)}>
          other count is {otherCount}
        </button>
      </div>
    </>
  );
}

export default App;
