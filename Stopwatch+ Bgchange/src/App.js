import {useState} from 'react';
import Stopwatch from './Stopwatch';
import {colors} from './constants/bgcolors'
import './App.css';

function App() {
  const[bgcolor,setBgcolor]=useState(colors[0]);

  const colorchange=(value)=>
  {
    console.log(bgcolor)
    setBgcolor(colors[value])
  }
  return (
    <div className={bgcolor}>
      <Stopwatch changecolor={colorchange}/>
    </div>
  );
}

export default App;
