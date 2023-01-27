// Import all the components
import Heading from './components/heading';
import Landing from './components/landing';
import Game from './components/game';
import Help from './components/rules';

// Import the styles
import './App.css';

import { Routes, Route } from "react-router-dom";




// Create a function component for App
function App() {

  

  return(
    <div className ="App">
      <Heading />
      <Routes>
        <Route exact path="/" element= {<Landing />}/>
        <Route exact path="/game" element= {<Game />}/>
        <Route path="/help" element= {<Help />}/>
      </Routes>
    </div>
  )
}

// Export the component 
export default App