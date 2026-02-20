import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // alert("Previous");
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    // alert("Next");
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  function display() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      <button className="close" onClick={display}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""} `}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div>
              <Button
                btn="btn"
                onClick={() => alert(`Learn How To ${messages[step - 1]}`)}
              >
                Learn How
              </Button>
            </div>
          </StepMessage>
          {/* <p>
              <h3>Step {step}:</h3> {messages[step - 1]}
            </p> */}

          <div className="buttons">
            <Button btn="btn" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            {/* <button className="btn" onClick={handlePrevious}>
              Previous
            </button> */}

            <Button btn="btn" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
            {/* <button className="btn" onClick={handleNext}>
              Next
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

function Button({ btn, onClick, children }) {
  return (
    <button className={btn} onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}
