import { Link } from "react-router-dom";


// Function component for a link to begin the game
function Landing() {
   

    return(
        <Link to="/game" id="startGame">Click to Start Game</Link>
    )
}

// Export the landing component
export default Landing