import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css'
import TextBlock from './TextBlock'

function App() {
console.log("Yoooooooooo")

  return (
    <div className="App" >
    <Parallax pages={2} style={{ top: '0', left: '0'}} className='animation'>

      <ParallaxLayer offset={0} speed={1} factor={1}>
        <div className="animation_layer" id='one'></div>  
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={0.5} factor={2}>
        <div className="animation_layer" id='two'></div>  
      </ParallaxLayer>
      
      <ParallaxLayer offset={0} speed={2} factor={2}>
        <div className="animation_layer" id='three'></div>  
      </ParallaxLayer>
      
      <ParallaxLayer offset={1} speed={0.1}>
        <TextBlock />
      </ParallaxLayer>

    </Parallax>
    </div>
  )
}

export default App
