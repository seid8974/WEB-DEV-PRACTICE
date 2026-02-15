import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "green",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "React",
    level: "advanced",
    color: "cyan",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "orange",
  },
];

function App() {
  return (
    <div className="container">
      <img src="images/image.png" alt="Profile image" />
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="personality-container">
      <div className="personality">
        <h2>Jonas Schmedtmann</h2>
        <p>
          Full-stack web developer and teacher at Udemy. When not coding or
          preparing a course, I like to play board games, to cook (and eat), or
          to just enjoy the Portuguese sun at the beach.
        </p>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="skills">
      {skills.map((sk) => (
        <p className={`skill ${sk.color}`}>
          {" "}
          <span className="skill-name">{sk.skill}</span> {"    "}{" "}
          <span>{sk.level === "beginner" && "👍"}</span>
          <span>{sk.level === "intermediate" && "⚡"}</span>
          <span>{sk.level === "advanced" && "🔥"}</span>
        </p>
      ))}

      {/* //   <p className="skill blue">HTML+CSS 🔥</p>
    //   <p className="skill yellow">JavaScript 🔥</p>
    //   <p className="skill green">Web Design 🔥</p>
    //   <p className="skill red">Git and GitHub 👍</p>
    //   <p className="skill cyan">React ⚡</p>
    //   <p className="skill orange">Svelte 🔥</p> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
