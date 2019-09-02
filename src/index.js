import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0); // initialize count to 0

  // useEffect is similar to componentDidMount and componentDidUpdate
  // useEffect gets called after the component did mount/update
  useEffect(() => {
    // Update the document title using the browser API
    // Note: document.title does not work on codesandbox
    document.title = `You clicked $(count) times`;
  }, []); 
  /*  
  By passing an empty array as second argument, 
  it is acting like componentDidMount only - it will initial state to 0 and render initial state.
  "componentDidUpdate" will not get called for each new render update
  */


  return (
    <div className="App">
      <header>
        <h1>Fetching Data from an API</h1>
        <h2 class="text-muted">With React Hooks useEffect</h2>
      </header>

      <div className="content">
        <p>You clicked {count} times </p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>          
          Click me
        </button>
      </div>
      <footer className="footer">
        Tutorial from
        <a href="https://www.youtube.com/watch?v=k0WnY0Hqe5c"> Ben Awad</a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
