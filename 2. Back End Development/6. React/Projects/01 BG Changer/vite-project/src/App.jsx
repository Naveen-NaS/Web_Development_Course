import { useState } from "react";
import "./App.css";

function Button() {
  const [color, setColor] = useState("olive")
  onClick={() => setColor("red")}

}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <button></button>
      </div>
    </>
  );
}

export default App;
