import React, {Fragment, useState, useEffect} from "react"
import {ReactComponent as ReacticonRock} from '../../assets/svg/iconRock.svg'
import {ReactComponent as ReacticonPaper} from '../../assets/svg/iconPaper.svg'
import {ReactComponent as ReacticonScissors} from '../../assets/svg/iconScissors.svg'
import Youwin from "../youwin";

const gameOptions = [
  {
    name: 'Rock',
    id: 'rock'
  },
  {
    name: 'Paper',
    id: 'paper'
  },
  {
    name: 'Scissors',
    id: 'scissors'
  },
]

const Game = (props) => {


  const [counter, setCounter] = useState(3);
  const [isFinished, setIsFinished] = useState(false);
  const [userSelection, setUserSelection] = useState(null);

  useEffect(()=>{
    if(counter < 0) return (setIsFinished (true))
    //disminuye un segundo al contador
    const interval = setInterval(() => {
      setCounter(prev => prev = prev - 1)
    }, 1000);
    return () => clearInterval(interval);
  },[counter])

  //id === 'rock' -> handleUserSelection(option.id)
  //id === {name: 'Rock', id: 'rock'} -> handleUserSelection(option)
  function handleUserSelection(id) {
    setUserSelection(id)
  }

  return isFinished ? 
    <Youwin 
    userSelection={userSelection} 
    />
    
    :
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div className='iconsContainer'>
      {gameOptions.map((option, index) =>{
        return <div key={`option_${option.id}`}>
          {option.id === 'rock' ? 
            <ReacticonRock className='icons'/>
            : option.id === 'scissors' ? 
            <ReacticonScissors className='icons'/>
            : 
            <ReacticonPaper className='icons'/>
          }
        </div>
      })}
    </div>
    <div className='iconsContainer'>
      <div className='number'>{counter}</div>
    </div>
    <div className='iconsContainer'>
      {gameOptions.map((option, index) =>{
        return (
          <div 
            onClick={()=>{handleUserSelection(option.id)}}
            key={`option_${option.id}`}
          >
            {option.id === 'rock' ? 
              <ReacticonRock style={{boxShadow: userSelection === option.id ? '6px 6px 48px green':''}} className='icons'/>
              : option.id === 'scissors' ? 
              <ReacticonScissors style={{boxShadow: userSelection === option.id ? '6px 6px 48px green':''}} className='icons'/>
              : 
              <ReacticonPaper style={{boxShadow: userSelection === option.id ? '6px 6px 48px green':''}} className='icons'/>
            }
          </div>
        )
      })}
    </div>
  </div>
};

export default Game