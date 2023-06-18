import refs from './refs'

const API_KEY = 'live_sY8peC6sVyh3xgjmV8CkKzIlSe6QwBtFfvAFDJLSlbN1ugxtIH58p2xmm6CbNw2l';

export function fetchBreeds() {
  return fetch(`https://api.thecatapi.com/v1/breeds`)
    .then(response => {
      refs.loader.classList.remove('is-hidden')
      return response.json()
    })
        
}

export function fetchCatByBreed(Id) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${Id}&api_key=${API_KEY}`).then(
        response => {
      refs.loader.classList.remove('is-hidden')
      return response.json()
    }
    )
}

export function drawCatInfo(data) {
const cat = data[0]

    refs.contectOutput.innerHTML = `<div class="cat-info__image"><img src="${cat.url}" alt="${cat.breeds[0].name}" /></div>
<div class="cat-info__text">
  <h1 class="Cat-info-title">${cat.breeds[0].name}</h1>
  <p class="cat-info__description">${cat.breeds[0].description}</p>
  <p class="cat-info__temperament"><strong>Temperament: </strong>${cat.breeds[0].temperament}</p>
</div>`
  refs.loader.classList.add('is-hidden')
  refs.errorOutput.classList.add('is-hidden')
}

export function createOptions(options) {
  refs.loader.classList.add('is-hidden')
  refs.errorOutput.classList.add('is-hidden')
    refs.catSelect.innerHTML = options.map(option => {
        const optionEl = `<option value = ${option.id}>${option.name}</option>`

        return optionEl
    }).join('')


}
export function onError() {
  refs.loader.classList.add('is-hidden')
  refs.errorOutput.classList.remove('is-hidden')
}