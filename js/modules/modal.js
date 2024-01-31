export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir)
    this.botaoFechar = document.querySelector(botaoFechar)
    this.containerModal = document.querySelector(containerModal)
    this.eventModal = this.eventModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo')
  }

  // adiciona o evento de toggle ao modal
  eventModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  // fecha o modal ao clicar no lado de fora do modal
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.eventModal(event)
    }
  }

  // adiciona os eventos aos elementos do modal
  addEventModal() {
    this.botaoAbrir.addEventListener('click', this.eventModal)
    this.botaoFechar.addEventListener('click', this.eventModal)
    this.containerModal.addEventListener('click', this.cliqueForaModal)
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addEventModal()
    }
    return this
  }
}
