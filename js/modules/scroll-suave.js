export default function initScrollSuave() {
  const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  function scrollarparasection(event) {
    event.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)

    // const topo = section.offsetTop
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // })
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  linksinternos.forEach((link) => {
    link.addEventListener('click', scrollarparasection)
  })
}
