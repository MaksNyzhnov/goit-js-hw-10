import refs from './refs'
import { fetchBreeds, fetchCatByBreed, drawCatInfo, createOptions, onError } from './cat-api';



fetchBreeds().then(data => {
    
    createOptions(data)
})
    .catch(error => onError());



refs.catSelect.addEventListener('change', () => {
    const id = refs.catSelect.value;
    fetchCatByBreed(id)
        .then(data => drawCatInfo(data)).catch(error => onError())
    
})

