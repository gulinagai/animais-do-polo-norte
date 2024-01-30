export default class TabNav {
  constructor(menu, content) {
    this.tabmenu = document.querySelectorAll(menu)
    this.tabcontent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  // ativa a tab de acordo com o index da mesma
  classTabContent(index) {
    this.tabcontent.forEach((section) => {
      section.classList.remove(this.activeClass, section.dataset.anime)
    })
    this.tabcontent[index].classList.add(this.activeClass, this.tabcontent[index].dataset.anime)
  }

  // adiciona o evento ao clique nas tabs(imagens)
  addEventTabNav() {
    this.tabmenu.forEach((li, index) => {
      li.addEventListener('click', () => this.classTabContent(index))
    })
  }

  init() {
    if (this.tabmenu.length && this.tabcontent.length) {
      this.addEventTabNav()
      this.classTabContent(0)
    }
  }
}
