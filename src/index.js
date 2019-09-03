import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useFetch = (url)=> {
  // const [person, setPerson] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  /*
  To have useEffect act like componentDidMount ONLY, pass in an empty array for the second argument.
  i.e. useEffect(fn, [])
  componentDidMount is often used to fetch data from an API
   */
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      const [item] = data.results;
      setData(item);
      setLoading(false);
    }
    fetchData();
  },[url]);

  return {data,loading};
}

function App() {
  const [count, setCount] = useState(0); // initialize count to 0
  const [userInput, setUserInput] = useState(""); // initialize userInput to empty string
  const {data, loading} = useFetch("https://api.randomuser.me/");
  /*
  useEffect(fn) is similar to componentDidMount AND componentDidUpdate
  - it runs after a component did mount/update
  - You can have multiple useEffect, each one doing something different.

  When there are multiple states, useEffect(fn) will always run when any state did update.
  To avoid unnessary calls to useEffect, pass in an array with the state you want to monitor. 
  i.e. useEffect(fn) runs when either 'count', 'person' or 'userInput' did update
  i.e. useEffect(fn, [count]) runs only when 'count' did update
  */
  useEffect(() => {
    console.log("userInput: ", userInput);
    /* 
      Note useEffect is not updating the state here.
      (The state update is done by setUserInput() inside the updateUserInput function)

      Putting setStates() here can lead to infinite loops because each update triggers another call,
      unless it is passed:
        - an empty array to act like componentDidMount, so it runs only once.
        - the states to monitor, so it only runs when those states did update.
    */
  },[userInput]);


  const updateUserInput = e => {
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>React Hooks: useEffect</h1>
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
          <div className="form-group">
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

        <div>
          <p>Fetched random person from API:</p>
          {/* {data &&  */}
          {loading ? 
            <>...loading</>
            :
            <>
              <p>{data.name.first} {data.name.last} from {data.location.city}
              </p>
              <img src={data.picture.medium} alt="a random person"/>
            </>
          }
        </div>
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
