export default class ScrollSuave {
  constructor(links, options) {
    this.linksinternos = document.querySelectorAll(links)
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' }
    } else {
      this.options = options
    }
    this.scrollarparasection = this.scrollarparasection.bind(this)
  }

  scrollarparasection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView(this.options)
  }

  addLinkEvent() {
    this.linksinternos.forEach((link) => {
      link.addEventListener('click', this.scrollarparasection)
    })
  }

  init() {
    if (this.linksinternos.length) {
      this.addLinkEvent()
    }
    return this
  }
}
