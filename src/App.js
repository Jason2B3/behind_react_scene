import React, { useState, useCallback, useMemo } from "react";
import "./App.css";
import Button from "./components/Button";
import DemoOutput from "./components/DemoOutput";

function App() {
  console.log("App component running!");
  const [stateVari, setStateVari] = useState(false);

  //$ Same function is given to <Button> every time, if we employ useCallback
  const toggleHandler = useCallback(function () {
    setStateVari((prevState) => !prevState); // schedules T/F toggle
  }, []);
  let arr= useMemo(()=>{
    return [5, 8, 3, 11, 2]; 
    // prevents array from being recreated on re-evaluation
  },[])
  return (
    <div>
      <h1>Hi there!</h1>
      <p>stateVari value is currently: {stateVari.toString()}</p>
      <Button onClick={toggleHandler}>Toggle stateVari</Button>
      <DemoOutput
        forcesReval={stateVari} // on butn click, this will re-eval this comp
        testAttribute={arr}
      />
    </div>
  );
}

export default App;
