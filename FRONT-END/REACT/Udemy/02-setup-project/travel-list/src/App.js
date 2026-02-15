import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shoes", quantity: 2, packed: false },
  { id: 4, description: "T-Shirts", quantity: 5, packed: false },
  { id: 5, description: "Toothbrush", quantity: 1, packed: false },
  { id: 6, description: "Laptop", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Title />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Title() {
  return (
    <header className="header">
      <h1> 🌴 FAR AWAY 💼</h1>
    </header>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleForm(e) {
    e.preventDefault();

    if (!description) return;

    const items = { description, quantity, packed: false, id: Date.now() };

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>what do you need for your 🅿️ trip? </h3>
      {/* <form className="form"> */}
      <select
        className="form-btn"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value={1}>{1}</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option> */}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        className="form-btn"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button type="submit" className="form-btn btn">
        ADD
      </button>
      {/* </form> */}
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <List item={item} />
        ))}
      </ul>
    </div>
  );
}

function List({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <p>💼 You Have x items on your list. and you already packed x(x%)</p>
    </footer>
  );
}
