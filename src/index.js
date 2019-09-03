import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0); // initialize count to 0
  const [userInput, setUserInput] = useState(""); // initialize userInput to empty string

  /*
  useEffect(fn) is similar to componentDidMount AND componentDidUpdate
  - it runs after a component did mount/update
  - You can have multiple useEffect, each one doing something different.

  To have useEffect act like componentDidMount ONLY, pass in an empty array for the second argument.
  i.e. useEffect(fn, [])
   */
  useEffect(() => {
    console.info("Component did mount");
  }, []);

  /*   
  When there are multiple states, useEffect(fn) will always run when any state did update.

  To avoid unnessary calls to useEffect, pass in an array with the state you want to monitor. 
  i.e. useEffect(fn) runs when either 'count' or 'userInput' did update
  i.e. useEffect(fn, [count]) does not run when 'userInput' did update
  */
  useEffect(() => {
    console.log("userInput: ", userInput);
    /* 
      Note useEffect is not updating the state here.
      Putting setStates() here can lead to infinite loops (because each update triggers another call)
      Infinite loops can be avoided by passing in the states to monitor.

      The state update is done by setUserInput() inside updateUserInput()
    */
  },[userInput]);


  const updateUserInput = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Fetching Data from an API</h1>
        <h2 className="text-muted">With React Hooks useEffect</h2>
      </header>

      <div className="content">
        <div>
          <p>You clicked {count} times</p>
          <button
            className="btn btn-primary"
            onClick={() => setCount(count + 1)}
          >
            Click me
          </button>
        </div>
        <form>
          <div className="form-group col-md-6">
            <label htmlFor="user-input">You typed:{userInput}</label>
            <input
              type="text"
              id="user-input"
              className="form-control"
              value={userInput}
              onChange={updateUserInput}
              placeholder="Write some text here"
            />
          </div>
        </form>
      </div>

      <footer className="footer">
        <p>
          {" "}
          Tutorials from
          <a href="https://www.youtube.com/watch?v=k0WnY0Hqe5c"> Ben Awad</a>,
          <a href="https://www.youtube.com/watch?v=K4xfCIRuf54"> codedamn</a>,
          <a href="https://www.youtube.com/watch?v=i4KuAuZjRO8"> Weibenfalk</a>
        </p>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
