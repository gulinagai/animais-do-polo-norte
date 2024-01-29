export default function iniciarAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach((numero) => {
      const numerotexto = +numero.innerText
      const incremento = numerotexto / 100
      let c = 0
      const loopnumero = setInterval(() => {
        c += incremento
        const arredondamento = Math.round(c)
        numero.innerText = arredondamento
        if (arredondamento === numerotexto) {
          numero.innerText = numerotexto
          clearInterval(loopnumero)
        }
      }, 25 * Math.random())
    })
  }
  let observer
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect()
      animaNumeros()
    }
  }
  const observertarget = document.querySelector('.numeros')
  observer = new MutationObserver(handleMutation)
  observer.observe(observertarget, { attributes: true })
}
