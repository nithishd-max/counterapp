import React from "react"
import './App.css';
import { useState ,} from 'react';

function App() {
  const [count,setCount]= useState(0);
 // const [msg,setMsg]=useState("Ooops");
  return (
    <div className="App">
      <header>
        <h2>CounterApp using States/hooks</h2>
      </header>
      <h2>current value of counter is {count}</h2>
      <button onClick={() =>setCount(0)}>reset</button>
      <button onClick={() =>(count>=10?"":setCount(count+1))}>increment</button>
      <button onClick={() =>(count<=0?"":setCount(count-1))}>decrement</button>



    </div>
   

   
  )
};

export default App;
