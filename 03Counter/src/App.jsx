import { useState } from 'react'
import './App.css'

function App() {

  const[counter,setCounter] = useState(15);

  function addValue(){
    if(counter < 20){
      setCounter(counter + 1); 
    }
    else{
      if(isNaN(counter)){
        setCounter(15)
      }
      else{
        setCounter("cannot evaluate further")
      }
    }
 
  }
  function decreaseVal(){
    if(counter > 0){
      setCounter(counter - 1); 
    }
    else{
      if(isNaN(counter)){
        setCounter(15)
      }
      else{
        setCounter("cannot evaluate further")
      }
    }
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter value : {counter}</h2>
      <button 
      onClick = {addValue}
      className="btn">Add Value</button>
      <br />
      <button 
      onClick = {decreaseVal}
      className="btn">Decrease Value</button>
    </>
  )
}

export default App
