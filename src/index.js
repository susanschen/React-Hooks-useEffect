import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0); // initialize count to 0
  const [count2, setCount2] = useState(100); // initialize count2 to 100;

  // useEffect is similar to componentDidMount and componentDidUpdate
  // useEffect gets called after the component did mount/update
  useEffect(() => {
    // Update the document title using the browser API
    // Note: document.title does not work on codesandbox
    console.info('did Mount');
    document.title = `You clicked $(count) times`;
    console.info(document.title);
  }, []); 
  /*  
  By passing an empty array as a second argument, useEffect is acting like componentDidMount only
   - it will initial state to 0 and render initial state.
  "componentDidUpdate" will not get called for each new render update
  */

  // You can have multiple useEffect, each one doing something different.
  useEffect(() => {
    console.log("count2: ", count2);
  }, [count2]); 
  /*   
  When you have a lot of states, useEffect will always run whenever a state changes.
  To avoid unnessary calls to useEffect, pass in a state as the value of array so useEffect
  will render only when that state changes.
  i.e. pass [count2] so this useEffect funtion does not run when 'count' updates
  */


  return (
    <div className="App">
      <header>
        <h1>Fetching Data from an API</h1>
        <h2 className="text-muted">With React Hooks useEffect</h2>
      </header>

      <div className="content">
        <div>
          <p>You clicked {count} times</p>
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>          
            Click me
          </button>
        </div>
        <div>
          <p>You clicked {count2} times!</p>
          <button className="btn btn-primary" onClick={() => setCount2(count2 + 1)}>          
            Click me!
          </button>
        </div>
      </div>

      <footer className="footer">
        <p> Tutorials from
          <a href="https://www.youtube.com/watch?v=k0WnY0Hqe5c"> Ben Awad,</a>
          <a href="https://www.youtube.com/watch?v=K4xfCIRuf54"> codedamn</a></p>   
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
