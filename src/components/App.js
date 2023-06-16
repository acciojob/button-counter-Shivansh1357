
import React from "react";

import './../styles/App.css';
import Button from  "./Button"

const App = () => {
  let [count,setCount]=React.useState(0);
  function countClicks(){
    setCount(count+1)
  }
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={countClicks}>Click me</button>
    </div>
  )
}

export default App

