async function Api() {
  const url = 'https://restcountries.com/v2/all';
  await fetch(url).then(response => response.json())
    .then(async element => {
      await country(element)
    })
    .catch(err => console.log(" api doğru çalıştırılamadı"))
}
function country(element) {
  for (let data of element) {
    let {name , capital , gini , population , flag } = data // with destructuring method
    // const countryName = data.name  // with creating variables
    // const countryCapital = data.capital
    // const countryPopulation = data.population
    // const countryGini = data.gini
    // const countryFlag = data.flags.png
if(!gini){
  gini = "data not found"
}
    create(name, capital, population, gini, flag)

  }
}

function create(name, capital, population, gini, flags) {
  let ekle = `<div class="country__name">${name}</div>
    <div class="country__flag"><img class="flag" src="${flags}" alt=""></div>
    <div class="country__capital"> <span>Capital : </span> ${capital}</div>
    <div class="country__population"> Population : <span>${population}  </span> </div>
    <div class="country__gini"> <span>Gini Coefficient :  </span> ${gini}</div>`
  const generealcard = document.querySelector(".general__card")
  const card = document.createElement("div")
  card.className = ("card")
  card.innerHTML = ekle
  generealcard.appendChild(card)
}
Api();