// import {userButton} from './userButton.js';
import {
    request
} from './request.js';
export function getUserInput () {
    //Get the user input

    let userInput = document.getElementById("user-input-field").value
    console.log("Searching for: ", userInput)

    //send to request.js    
    request(userInput)
     
}
