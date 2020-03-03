// //imports 
// import {
//     getUserInput
// } from './modules/userinput.js';

// import {
//     request
// } from './modules/request.js';

// import {
//     render
// } from './modules/render.js';

// import {
//     router
// } from './modules/router.js';


// //search form
// const button = document.getElementById('submitbtn')
// button.addEventListener("click", getUserInput);



/*** Fetching data -> refactor into module later ***/
const button = document.getElementById('submitbtn')
button.addEventListener("click", getUserInput);

function getUserInput() {
  //Get the user input
  const userInput = document.querySelector("input").value
  console.log("Searching for: ", userInput)

const main = document.querySelector('main');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = (userInput);
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';


const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    // const Info = document.querySelector('main.list')
    // Info.innerHTML = ""
    return response.json();
  })
  .then(data => {
    render(data);
    const trefwoord = document.getElementById("trefwoord")
    trefwoord.innerHTML += 'Op zoek naar: ' +  (userInput)
  })
  .catch(err => {
    console.log(err);
  });

// render data
function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
      const html = `
            <article>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
              <a href = '#${
                item.id}'></a>
            </article>
            
          `;
      main.insertAdjacentHTML('beforeend', html);
              })

            }  
}
