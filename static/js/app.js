import getData from '../modules/api.js';
import render from '../modules/render.js'
import showFeedback from '../modules/searcher.js'

/*** Fetching data -> refactor into module later ***/
const button = document.getElementById('submitbtn')
button.addEventListener("click", getUserInput);

function getUserInput() {

  const userInput = document.querySelector("input").value
  showFeedback.loading(userInput)
  getData(userInput).then(result => {
      return result
    })
    .then(data => {
      showFeedback.results(userInput)
      render.overview(data)
    })
}

routie({
  '': function() {},
  'book/:id': function(id) {
    const getId = id.substr(1)
    getData(getId).then(result => {
        return result
      })
      .then(data => {
        render.detail(data[0])
        updatePage('detail')
      })
  },
  'overview': function() {
    console.log('overview')
    updatePage('overview')
  },
  'editor': function() {
    console.log('editor')
    updatePage('editor')
  }
});


function updatePage(route) {
  const sections = document.querySelectorAll('section')
  const activeSection = document.querySelector(`#${route}`)

  sections.forEach(item => {
    item.classList.remove('active')
  })

  activeSection.classList.add('active')
}