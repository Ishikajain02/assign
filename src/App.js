import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount] = useState(0);
  return (
    <div className="App">
      <h1>
      counter {count};
      </h1>
     <button  style={{ height: 50, width: 80}}  type="button" onClick ={()=>setcount(count+1)}>Increase</button>
     <button  style={{ height: 50, width: 80}}  type="button" onClick ={()=>setcount(count-1)}>Deccrease</button>

    </div>
  );
}

export default App;
