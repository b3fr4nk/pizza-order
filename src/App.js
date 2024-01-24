import { useState } from "react";

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
          type="text"
          onChange={() => setName(name)}
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
      </form>
      <div>
        <h2>Your Order</h2>
        {peperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
      </div>
    </div>
  );
}

export default App;
