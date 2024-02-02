export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }

  // Recebe um elemento do DOM, com número em seu texto
  // incrementa a partir de 0 até o número final
  static incrementarNumero(numero) {
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
  }

  // Ativa incrementarNumero para cada
  // número selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero))
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumeros()
    }
  }

  // Adiciona o MutationObserver para verificar
  // quando a classe ativo é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    console.log(this.observerTarget)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
