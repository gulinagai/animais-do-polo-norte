import debounce from './debounce.js'

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6
    this.checkDistance = debounce(this.checkDistance.bind(this), 50)
    this.activeClass = 'ativo'
  }

  // Pega a distância e o elemento de cada section em
  // relação ao topo do site e retorna em um objeto
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      }
    })
  }

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.scrollY > section.offset) {
        section.element.classList.add(this.activeClass)
      } else if (section.element.classList.contains(this.activeClass)) {
        section.element.classList.remove(this.activeClass)
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}
