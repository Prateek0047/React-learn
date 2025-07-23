import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(18);
  const adder = () => {
    if (count >= 20) {
      alert("limit exeeded");
    } else {
      setCount(count + 1);
      console.log("clicked", count, "to add next");
    }
  };
  const remover = () => {
    if (count <= 0) {
      alert("limit exeeded");
    } else {
      setCount(count - 1);
      console.log("removed", count);
    }
  };

  return (
    <>
      <h1> Prateek aur React </h1>
      <h1> counter = {count}</h1>
      <button onClick={adder}> value added</button>
      <br />
      <button onClick={remover}> value removed </button>
    </>
  );
}

export default App;
