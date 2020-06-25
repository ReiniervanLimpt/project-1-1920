const trefwoord = document.getElementById("trefwoord")

const showFeedback = {
  loading: function(query) {
    trefwoord.innerHTML = ''
    trefwoord.innerHTML = 'Zoeken naar ' + (query) + '......'
  },
  results: function(query) {
    trefwoord.innerHTML = ''
    trefwoord.innerHTML = 'Boeken gevonden over: ' + (query)
  }
}

export default showFeedback;