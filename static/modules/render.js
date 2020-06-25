const main = document.querySelector('#list')
const detail = document.getElementById('detail')

const render = {
  overview: function(data) {
    main.innerHTML = ""
    data.forEach(item => {
      const html = `
            <article>
            <div class ="cover">
            <span class="title"> ${item.titles[0]} </span>
            <span class="author"> ${item.authors ? item.authors[0] : 'geen auteur bekend'} </span>
            </div>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen afbeelding beschikbaar'
              }">
              <a href = '#book/:${item.isbn ? item.isbn[0]: '' }'></a>
            </article>
          `
      main.insertAdjacentHTML('beforeend', html);
    })
  },
  detail: function(data) {
    detail.innerHTML = ""
    const html = `
      <ul id = "bookinfo">
      <li>
      <img src="${
        data.coverimages[0] ? data.coverimages[1] : 'Geen afbeelding beschikbaar'
      }">
      </li>
      <li>
      <b>Titel</b>
        <p>${data.titles}</p>
        <hr>
        <b>Talen </b>
        <p>${data.languages}</p>
        <hr>
        <b>Samenvatting </b>
        <p>${data.summaries ? data.summaries[0] : 'Geen samenvatting'}</p>
        <hr>
        <p><a class='close' href ="#overview"> X </a>
       <a href ="#editor"> Maak een Werkstuk </a>
       </p>
      </li>
      </ul>
    `
    detail.insertAdjacentHTML('beforeend', html);
  }
}

export default render;