

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
  const key = '0076bc3bc11d080e07a303360178002a';
  const secret = '187b973dc49e054fa7635313a9c8540f';
  const detail = 'Default';


  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
  const config = {
    Authorization: `Bearer ${secret}`
  };

  fetch(url, config)
    .then(response => {
      const Info = document.querySelector('main')
      Info.innerHTML = ""
      return response.json();
    })
    .then(data => {
      render(data);
      const trefwoord = document.getElementById("trefwoord")
      trefwoord.innerHTML = ''
      trefwoord.innerHTML = 'Op zoek naar: ' + (userInput)
    })
    .catch(err => {
      console.log(err);
    });

  // render data
  function render(data) {
    const results = data.results;
    console.dir(results);
    results.forEach(item  => {
      const html = `
            <article>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
              <a href = '#${item.isbn ? item.isbn[0]: '' }'></a>
            </article>
            
          `;
      main.insertAdjacentHTML('beforeend', html);
      routie({
        
        [item.isbn]: function () {
          console.log('test')
          const Info = document.getElementById('detail')
          Info.innerHTML = ""
          // const Displaylist = document.getElementById('list')
          // Displaylist.innerHTML = ""
          const hash = window.location.hash.slice(1)
          if (hash == item.isbn) {
          // console.log(db.track_id)
          const html = `
            <ul id = "bookinfo">
            <li>
            <img src="${
              item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
            }">
            </li>
            <li>
            <h2>${item.titles[0]}</h2>
            <hr>
            <b>Schrijver(s) </b>
              <p>${item.authors}</p>
              <hr>
              <b>Talen </b>
              <p>${item.languages}</p>
              <hr>
              <b>Samenvatting </b>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <hr>
              <p><a href = "${item.detailLink}"> Bekijk Werkstuk </a></p>
            </li>
            </ul>
            
          `;
      Info.insertAdjacentHTML('beforeend', html);
        }}
      })
  })
 }
}