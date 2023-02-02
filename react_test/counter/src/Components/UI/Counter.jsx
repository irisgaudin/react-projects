import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="test">
        <button className="button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
        <button className="button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
      </div>
              Total: {counter}

    </>
  );
};

export default Counter;
