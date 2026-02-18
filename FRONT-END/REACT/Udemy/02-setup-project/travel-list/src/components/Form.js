import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleForm(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItems);

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
