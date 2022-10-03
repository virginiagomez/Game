import React, {Fragment, useState, useEffect} from "react"
import {ReactComponent as ReacticonRock} from '../../assets/svg/iconRock.svg'
import {ReactComponent as ReacticonPaper} from '../../assets/svg/iconPaper.svg'
import {ReactComponent as ReacticonScissors} from '../../assets/svg/iconScissors.svg'

const Game = (props) => {

  const [counter, setCounter] = useState(3);

  useEffect(()=>{
    if(counter === 0) return undefined
    //disminuye un segundo al contador
    const interval = setInterval(() => {
      setCounter(prev => prev = prev - 1)
    }, 1000);
    return () => clearInterval(interval);
  },[counter])

  return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div className='iconsContainer'>
      <div><ReacticonRock className='icons'/></div>
      <div><ReacticonPaper className='icons'/></div>
      <div><ReacticonScissors className='icons'/></div>
    </div>
    <div className='iconsContainer'>
      <div className='number'>{counter}</div>
    </div>
    <div className='iconsContainer'>
      <div> <ReacticonRock className='icons'/></div>
      <div><ReacticonPaper className='icons'/></div>
      <div><ReacticonScissors className='icons'/></div>
    </div>
  </div>
};

export default Game