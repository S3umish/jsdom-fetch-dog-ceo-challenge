console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', () => {
  console.log("loaded")
  getImages()
  getBreeds()
})

function getImages(){
  fetch (imgUrl)
  .then(resp => resp.json())
  .then(data => {
    addImagesToDom(data)
    console.log(data)
  })
}
function addImagesToDom(data){
  // grab the images
  const imageArray = data.message
  
  const container = document.getElementById('dog-image-container')
  // iterate through images
  // debugger
  imageArray.forEach(image => {
    let li = document.createElement("li")
    li.innerHTML = `<img src=${image}>`
    container.append(li) 
  })
}

function getBreeds() {
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(data => {
    addBreedsToDom(data)
    console.log(data)
})
}

function addBreedsToDom(data){
  // grab the images
  const breedObject = data.message
  const breedListUl = document.getElementById('dog-breeds')
  const dropdown = document.getElementById('breed-dropdown')
  
  // iterate through breeds
  //  debugger
  for (breed in breedObject){
    let li = document.createElement("li")
    li.innerHTML = breed
    breedListUl.append(li) 
    li.addEventListener('click', function(event) {
      event.currentTarget.style.color = "red"
    })
  }
  dropdown.addEventListener('change', function(event) {
    breedListUl.innerHTML = ""
    for(const breed in breedObject){
      if(breed[0] === event.target.value) {
        const li = document.createElement('li')
        li.innerHTML = breed
        breedListUl.append(li)
      }
    }
  })
}
