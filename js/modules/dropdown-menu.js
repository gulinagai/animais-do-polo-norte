import outsideClick from './outsideclick.js'

export default function iniciarDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((tipoDeEvento) => {
      menu.addEventListener(tipoDeEvento, handleClick)
    })
  })
}
