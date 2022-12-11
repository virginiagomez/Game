import React, {Fragment} from "react"
import {ReactComponent as ReacticonRock} from '../../assets/svg/iconRock.svg'
import {ReactComponent as ReacticonPaper} from '../../assets/svg/iconPaper.svg'
import {ReactComponent as ReacticonScissors} from '../../assets/svg/iconScissors.svg'


const Youwin = (props) => {

  const{userSelection,playAgain,computerSelection}= props

  function determinateWin(userSelection, computerSelection){
    if(userSelection === 'rock'){
      if(computerSelection === 'scissors'){
        return 'userWon'
      } else if(computerSelection === 'paper'){
        return 'computerWon'
      } else if(computerSelection === 'rock'){
        return 'draw'
      }
    } else if (userSelection === 'scissors'){
      if(computerSelection === 'paper'){
        return 'userWon'
      } else if(computerSelection === 'rock'){
        return 'computerWon'
      } else if(computerSelection === 'scissors'){
        return 'draw'
      }
    } else {
      if(computerSelection === 'rock'){
        return 'userWon'
      } else if(computerSelection === 'scissors'){
        return 'computerWon'
      } else if(computerSelection === 'paper'){
        return 'draw'
      }
    }
  }
  
  const whoWon = determinateWin(userSelection, computerSelection)
  // whoWon === 'userWon' || whoWon === 'computerWon' || whoWon === 'draw'
  
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div className='iconsContainer'>
      <div><ReacticonRock style={{opacity: computerSelection === 'rock' ? '1':'0.2'}} className='icons'/></div>
      <div><ReacticonPaper style={{opacity: computerSelection === 'paper' ? '1':'0.2'}} className='icons'/></div>
      <div><ReacticonScissors style={{opacity: computerSelection === 'scissors' ? '1':'0.2'}} className='icons'/></div>
    </div>
    <div className='iconsContainer'>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <p className='number'> 
          {
            whoWon === 'userWon' ? 
              'El usuario ganó' 
            : whoWon === 'computerWon' ? 
              'La computadora ganó' 
            : 
              'Es un empate'
          }
        </p>
      </div>
      <button onClick={playAgain} className="ButtonPlayAgain">PLAY AGAIN</button>
    </div>
    <div className='iconsContainer'>
      <div><ReacticonRock style={{opacity: userSelection === 'rock' ? '1':'0.2'}} className='icons'/></div>
      <div><ReacticonPaper style={{opacity: userSelection === 'paper' ? '1':'0.2'}} className='icons'/></div>
      <div><ReacticonScissors style={{opacity: userSelection === 'scissors' ? '1':'0.2'}} className='icons'/></div> 
    </div>
  </div>
};


export default Youwin