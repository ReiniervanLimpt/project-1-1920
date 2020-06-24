function handler() {
  routie({
    '': function() {
      console.log("routing werkt")
    },
    'book/:id': function(id) {
      const getId = id.substr(1)
      console.log(getId)
    },
    'overview': function() {
      console.log('overview')
    },
    'editor': function() {
      console.log('editor')
    }
  });

  function updatePage(route) {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.classList.remove('active')
    })
    const activeSection = document.querySelector(`[data-route="${route}"]`)
    console.log(activeSection)
    activeSection.classList.add('active')
  }
}

export default handler;