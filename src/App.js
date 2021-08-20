import React, { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/Button";
import DemoOutput from "./components/DemoOutput";

function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);

  //$ Same function is given to <Button> every time, if we employ useCallback
  const toggleHandler = useCallback(function () {
    setStateVari((prevState) => !prevState); // toggles T/F
    console.log(stateVari)
  }, []);
  const demoProp = "primitive string"; // any primitive value has the same effect

  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button>
      <DemoOutput testAttribute={demoProp} />
    </div>
  );
}

export default App;
