import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Fetching Data from an API</h1>
        <h2>With React Hooks useEffect</h2>
      </header>

      <div>
        <p>You clicked {count} times </p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          {" "}
          Click me{" "}
        </button>
      </div>
      <footer className="footer">
        Tutorial from{" "}
        <a href="https://www.youtube.com/watch?v=k0WnY0Hqe5c">Ben Awad</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
