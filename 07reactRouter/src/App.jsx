import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-500  p-4">Hello Tailwind</div>
    </>
  );
}

export default App;
