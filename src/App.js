import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {ReactComponent as ReacticonAudio} from './assets/svg/iconAudio.svg'
import Game from './pages/game';
import Home from './pages/home';


function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  // const isFemale = true
  // let name = isFemale ? 'Virginia' : 'Paul'
  // name === "Virginia"
  return (
    <div className="body">
      <nav style={{width:"100%",minHeight:"70px",backgroundColor:"#474747"}}>
        <div style={{width:"100%",minHeight:"40%",display:"flex",justifyContent:"space-between"}}>
          <div></div>
          <div> <ReacticonAudio style={{width:"65px",height:"65px",marginRight:"25px"}} /></div>
        </div>
      </nav>
      {isPlaying ? //if
        <Game/>
      : //else
        <Home setIsPlaying={setIsPlaying} />
      }
    </div>
  );
}

export default App;
