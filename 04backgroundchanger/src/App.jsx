import { useState } from "react";

function App() {
  const [color, setColor] = useState("purple");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2"
        >
          <div className="flex flex-wrap bg-gray-500 py-2 px-4 justify-center shadow-lg gap-3 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 bg-red-800 rounded-full text-white shadow-sm py-2"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 bg-green-600 rounded-full text-white shadow-sm py-2"
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 bg-yellow-500 rounded-full text-white shadow-sm py-2"
            >
              yellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 bg-orange-500 rounded-full text-white shadow-sm py-2"
            >
              orange
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 bg-black rounded-full text-white shadow-sm py-2"
            >
              black
            </button>
            <button
              onClick={() => setColor("white")}
              className="outline-none px-4 bg-white rounded-full text-black shadow-sm py-2"
            >
              white
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
