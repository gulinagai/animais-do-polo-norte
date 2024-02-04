import outsideClick from './outsideclick.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.dropdownMenusToggleClass = this.dropdownMenusToggleClass.bind(this)
    this.activeClass = 'active'

    // Define touchstart e click como argumento padrão
    // de events caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events
  }

  // Ativa o DropdownMenu adicionando a classe active
  // e aciona a função que observa o clique fora dele
  dropdownMenusToggleClass(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  // Adiciona os eventos ao DropdownMenu
  addDropDownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((tipoDeEvento) => {
        menu.addEventListener(tipoDeEvento, this.dropdownMenusToggleClass)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropDownMenusEvent()
    }
    return this
  }
}
