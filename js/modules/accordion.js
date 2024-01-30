export default class AccordionList {
  constructor(list) {
    this.dldt = document.querySelectorAll(list)
    this.activeClass = 'ativo'
  }

  toggleAccordion(dt) {
    dt.classList.toggle(this.activeClass)
    dt.nextElementSibling.classList.toggle(this.activeClass)
  }

  // adiciona o evento ao clique ao accordion
  addAccordionEvent() {
    this.dldt.forEach((dt) => {
      dt.addEventListener('click', () => this.toggleAccordion(dt))
    })
  }

  // iniciar função
  init() {
    if (this.dldt.length) {
      // ativa primeiro item
      this.toggleAccordion(this.dldt[0])
      this.addAccordionEvent()
    }
  }
}
