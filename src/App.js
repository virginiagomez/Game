import logo from './logo.svg';
import './App.css';
import {ReactComponent as ReacticonAudio} from './assets/svg/iconAudio.svg'
import {ReactComponent as ReacticonRock} from './assets/svg/iconRock.svg'
import {ReactComponent as ReacticonPaper} from './assets/svg/iconPaper.svg'
import {ReactComponent as ReacticonScissors} from './assets/svg/iconScissors.svg'
import {ReactComponent as ReactnumberTwo} from './assets/svg/numberTwo.svg'

function App() {
  return (
    <div className="body">
      <nav style={{width:"100%",minHeight:"70px",backgroundColor:"#474747"}}>
        <div style={{width:"100%",minHeight:"40%",display:"flex",justifyContent:"space-between"}}>
          <div></div>
          <div> <ReacticonAudio style={{width:"65px",height:"65px",marginRight:"25px"}} /></div>
        </div>
      </nav>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <div className='iconsContainer'>
          <div><ReacticonRock className='icons'/></div>
          <div><ReacticonPaper className='icons'/></div>
          <div><ReacticonScissors className='icons'/></div>
        </div>
        <div className='iconsContainer'>
          <div className='number'> <ReactnumberTwo/></div>
        </div>
        <div className='iconsContainer'>
          <div> <ReacticonRock className='icons'/></div>
          <div><ReacticonPaper className='icons'/></div>
          <div><ReacticonScissors className='icons'/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
