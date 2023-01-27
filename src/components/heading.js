import { Link } from "react-router-dom";
import { updateImage } from '../store/hangmanImages';
import { useDispatch } from "react-redux";




// Create a function component for the heading including navigation links to other components
function Heading() {
    
    const dispatch = useDispatch();

    // Create a function to reset the image 
    function reset(){
        dispatch(updateImage(0))
    }


    return(
        <div id="heading">
            <h1>Welcome to Hangman</h1>
            <h2>Generate a new word to begin playing</h2>
            <h4>Go to help for rules, if you leave the page you will have to restart the game</h4>
            <nav>
                <Link to="/" className="link" onClick={reset}>Home</Link>
                <Link to="/help" className="link">Help</Link>
            </nav>
        </div>
    )
}

// Export the heading function
export default Heading