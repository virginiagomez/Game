import React, {Fragment} from "react"

const Home = (props) => {

  const {setIsPlaying} = props

  return <div style={{width:"100%",height:"65px",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <p style={{fontSize:"46px",color:"white",align:"center",textAlign:"center",lineHeight:"200%"}}>ROCK PAPER SCISSORS <br/> <span>🤘      📄      ✂️</span></p>
    <button className="ButtonPlay" onClick={()=>{setIsPlaying(true)}}>PLAY</button>
  </div>
};

export default Home