import React, {Fragment} from "react"

const Home = (props) => {

  const {setIsPlaying} = props

  return <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    <p>ROCK PAPER SCISSORS <br/>🤘   📄   ✂️</p>
    <button onClick={()=>{setIsPlaying(true)}}>play</button>
  </div>
};

export default Home