import React, {Fragment} from "react"
import {ReactComponent as ReacticonRock} from '../../assets/svg/iconRock.svg'
import {ReactComponent as ReacticonPaper} from '../../assets/svg/iconPaper.svg'
import {ReactComponent as ReacticonScissors} from '../../assets/svg/iconScissors.svg'


const Youwin = (props) => {

  const{userSelection}= props

  
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div className='iconsContainer'>
      <div><ReacticonRock className='icons'/></div>
      <div><ReacticonPaper className='icons'/></div>
      <div><ReacticonScissors className='icons'/></div>
    </div>
    <div className='iconsContainer'>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <p className='number'>YOU WIN</p></div>
        <button  className="ButtonPlayAgain">PLAY AGAIN</button>
      </div>
    <div className='iconsContainer'>
      <div><ReacticonRock style={{boxShadow: userSelection === 'Rock' ? '6px 6px 48px green':''}} className='icons'/></div>
      <div><ReacticonPaper style={{boxShadow: userSelection === 'Paper' ? '6px 6px 48px green':''}} className='icons'/></div>
      <div><ReacticonScissors style={{boxShadow: userSelection === 'Scissors' ? '6px 6px 48px green':''}} className='icons'/></div> 
    </div>
  </div>
};


export default Youwin