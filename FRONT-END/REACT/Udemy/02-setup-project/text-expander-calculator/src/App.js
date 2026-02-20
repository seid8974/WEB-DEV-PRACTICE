import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />;
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  let tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How Did You Like The Service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How Did Your Friend Like The Service?
      </SelectPercentage>
      <OutPut bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}
function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How Much Was The Bill? </label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It Was Okay (5%)</option>
        <option value="10">It Was Good (10%)</option>
        <option value="20">Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function OutPut({ bill, tip }) {
  return (
    <h3>
      You Pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}
