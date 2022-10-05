import React, {Fragment} from "react"
import {ReactComponent as ReacticonRock} from '../../assets/svg/iconRock.svg'
import {ReactComponent as ReacticonPaper} from '../../assets/svg/iconPaper.svg'
import {ReactComponent as ReacticonScissors} from '../../assets/svg/iconScissors.svg'

const Youwin = (props) => {
    
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <div className='iconsContainer'>
      <div><ReacticonRock className='icons'/></div>
      <div><ReacticonPaper className='icons'/></div>
      <div><ReacticonScissors className='icons'/></div>
    </div>
    <div className='iconsContainer'>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <p className='number'>YOU WIN</p></div>
        <button className="ButtonPlayAgain">PLAY AGAIN</button>
      </div>
    <div className='iconsContainer'>
      <div> <ReacticonRock className='icons'/></div>
      <div><ReacticonPaper className='icons'/></div>
      <div><ReacticonScissors className='icons'/></div>
    </div>
  </div>
};


export default Youwin