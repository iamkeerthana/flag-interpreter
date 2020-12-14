import React, { useState } from "react";
import "./styles.css";

var flagsDictionary = {
  "🏳️‍🌈": "Rainbow Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flag",
  "🏁": "Chequered Flag",
  "🏴": "Black Flag",
  "🏴‍☠️": "Pirate Flag",
  "🏳️‍": "Transgender Flag",
  "🏳️": "White Flag"
};

var flagsWeKnow = Object.keys(flagsDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = flagsDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); // react call to show output
  }

  function flagClickHandler(flag) {
    // processing
    var meaning = flagsDictionary[flag];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>
        Flag <span1> Emoji </span1> <span2> Interpreter </span2>
      </h1>

      <input onChange={flagInputHandler} placeholder="Enter a flag emoji" />

      <h2>
        {" "}
        Flag name will come here 👉🏻<span> {meaning} </span>{" "}
      </h2>
      {/* Actual output set by React using useState */}

      <h3> Click on the flag to know the flag name </h3>
      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "4rem", padding: "2.3rem", cursor: "pointer" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
