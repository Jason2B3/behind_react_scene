import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button"

function App() {
  const [showPara, setShowPara]= useState(false)

  console.log('App component running!')
  const toggleHandler= function(){
    setShowPara((prevState)=> !prevState ) 
    // toggles T/F. use 
  }

  return (<div>
    <h1>Hi there!</h1>
    {/* {showPara && <p>This is new</p>} */}
    <Button onClick={toggleHandler}>Toggle Paragraph Button</Button>
  </div>);
}

export default App;
