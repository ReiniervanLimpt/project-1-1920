const main = document.querySelector('#list')

const render = {
  overview: function(data) {
    main.innerHTML = ""
    data.forEach(item => {
      const html = `
            <article>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
              <a href = '#book/:${item.isbn ? item.isbn[0]: '' }'></a>
            </article>

          `;
      main.insertAdjacentHTML('beforeend', html);
    })
  }
}

export default render;