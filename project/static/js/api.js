
const main = document.getElementById('list');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'special:all';
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
    const trefwoord2 = document.getElementById("trefwoord1")
      trefwoord2.innerHTML = ''
      trefwoord2.innerHTML = 'Op zoek naar: ' + (query)
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

