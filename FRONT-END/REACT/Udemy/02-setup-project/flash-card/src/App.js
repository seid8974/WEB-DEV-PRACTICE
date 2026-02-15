import { useState } from "react";

const questionAnswer = [
  {
    id: 4501,
    question: "What hook is used for side effects in functional components?",
    answer: "useEffect hook",
  },
  {
    id: 6723,
    question: "How to access the DOM node of a React element?",
    answer: "useRef hook",
  },
  {
    id: 8912,
    question:
      "What pattern allows passing data through the component tree without passing props manually at every level?",
    answer: "Context API",
  },
  {
    id: 3345,
    question: "How to optimize performance by skipping unnecessary re-renders?",
    answer: "React.memo",
  },
  {
    id: 5678,
    question: "What hook is used to cache expensive calculations?",
    answer: "useMemo hook",
  },
  {
    id: 7890,
    question: "How to create reusable logic that contains state and effects?",
    answer: "Custom hooks",
  },
];

export default function App() {
  return (
    <div className="App">
      <FlashCard />;
    </div>
  );
}

function FlashCard() {
  const [selectedId, setSelectedId] = useState(8912);

  function select(id) {
    setSelectedId(id);
  }

  return (
    <div className="flashcards">
      {questionAnswer.map((question) => (
        <div
          key={question.id}
          onClick={() => select(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
