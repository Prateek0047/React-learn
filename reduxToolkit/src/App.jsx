import { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1 className="bg-red-200 text-4xl"> learning about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
