import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <>
      <h1 className="bg-green-800 text-white rounded p-10 text-2xl font-medium mb-5">
        Tailwind test
      </h1>
      <Card head="sekiro ape" kharcha="rupees" />
      <Card head="monkey ape" />
    </>
  );
}

export default App;
