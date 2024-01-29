import iniciarAnimaNumeros from './anima-numeros.js'

export default function iniciarFetchAnimais() {
  function criarAnimal(animal) {
    // console.log(animal)
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}`
    // console.log(div)
    return div
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url)
      const animaisJSON = await animaisResponse.json()
      const numerosGrid = document.querySelector('.numeros-grid')
      // console.log(animaisJSON)
      animaisJSON.forEach((animal) => {
        const divAnimal = criarAnimal(animal)
        //    console.log(divAnimal)
        numerosGrid.appendChild(divAnimal)
      });
      iniciarAnimaNumeros()
    } catch (erro) {
      console.log(erro)
    }
  }
  fetchAnimais('./animaisapi.json')
}
