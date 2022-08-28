import { useState } from 'react';
import './App.css';
import Message from './Message';
function App() {
  const [count,setCount] = useState(0)
  const[morning,setMorning] = useState(false)
  return (
    <div >
        <div className={`box ${morning ?"dayLight": " "} `}>
        <h1>Hava a Good {morning?"MORNING":"NIGHT"}</h1>
      <Message counter={count}/>
      

      <button onClick={()=>{setCount(count + 1)}}>Change</button>

      <button onClick={()=>{setMorning(!morning)}}> weather</button>
    </div>
    </div>
  );
}

export default App;
