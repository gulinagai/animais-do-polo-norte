export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6
    this.animarAoScroll = this.animarAoScroll.bind(this)
  }

  animarAoScroll() {
    this.sections.forEach((section) => {
      const sectiontopo = section.getBoundingClientRect().top
      const sectionnotopocomp = (sectiontopo - this.windowMetade) < 0
      if (sectionnotopocomp) {
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.animarAoScroll()
      window.addEventListener('scroll', this.animarAoScroll)
    }
  }
}
