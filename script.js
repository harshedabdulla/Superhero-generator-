const dogImageDiv = document.getElementById('dogImage')
const details = document.getElementById('heroid.value')
const url = 'https://superheroapi.com/api.php/10223569763528853'
const searchButton = document.getElementById('search')
const searchInput = document.getElementById('heroid')
const ranImage = document.getElementById('ranImage')

const getStatsHTML = (character) => {
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stat}: ${character.powerstats[stat]}</p>`
  })
  console.log(stats)
}

const getRandom = (id, name) => {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(json => {
      ranImage.innerHTML = `
      <h3>Name: ${json.name}<h3/>
      <img src='${json.image.url}' height=100 width=100 border-radius=100%/>
      <h4>PowerStats: </h4>
      <h5>intelligence: ${json.powerstats.intelligence}</h5>
      <h5>strength: ${json.powerstats.strength}</h5>
      <h5>speed: ${json.powerstats.speed}</h5>
      <h5>durability: ${json.powerstats.durability}</h5>
      <h5>power: ${json.powerstats.power}</h5>
      `
    }
    )
}



const getSearch = (name) => {
  console.log(searchInput.value)
  const engVal = searchInput.value
  fetch(`${url}/search/${engVal}`)
  .then(response => response.json())
  .then(json => {
    const hero = json.results[0]
    dogImageDiv.innerHTML = `<br>
    <img src="${hero.image.url}" height=100 width=100/>
    <h3>${hero.name}</h3>
    <h3>PowerStats: </h3>
      <h4>intelligence: ${hero.powerstats.intelligence}</h4>
      <h4>strength: ${hero.powerstats.strength}</h4>
      <h4>speed: ${hero.powerstats.speed}</h4>
      <h4>durability: ${hero.powerstats.durability}</h4>
      <h4>power: ${hero.powerstats.power}</h4>`
  })
}
const ranHero = () => {
  const ranNum = 731
  return Math.floor(Math.random() * ranNum) + 1
}

const bb = document.getElementById('dogButton')
bb.onclick = () => getRandom(ranHero())
searchButton.onclick = () => getSearch('thanos')



