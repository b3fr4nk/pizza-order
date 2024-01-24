import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [peperoni, setPeperoni] = useState(false);
  const [sausage, setSausage] = useState(false);
  const [peppers, setPeppers] = useState(false);
  const [onions, setOnions] = useState(false);
  return (
    <div className="App">
      <h1>Pizza Order</h1>
      <form>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        ></input>
        <label>
          <input
            type="checkbox"
            checked={peperoni}
            onChange={() => setPeperoni(!peperoni)}
          ></input>
          Pepperoni
        </label>
        <label>
          <input
            type="checkbox"
            checked={sausage}
            onChange={() => setSausage(!sausage)}
          ></input>
          Sausage
        </label>
        <label>
          <input
            type="checkbox"
            checked={peppers}
            onChange={() => setPeppers(!peppers)}
          ></input>
          Peppers
        </label>
        <label>
          <input
            type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          ></input>
          Onions
        </label>
        <button typeof="submit">submit</button>
      </form>
      <div>
        <h2>Your Order</h2>
        <p>{name}</p>
        {peperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
      </div>
    </div>
  );
}

export default App;
