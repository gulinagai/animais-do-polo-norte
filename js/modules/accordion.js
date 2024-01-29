export default function iniciarnavaccordionlist() {
  const dldt = document.querySelectorAll('[data-anime="accordion"] dt')
  function clicou() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }
  if (dldt.length) {
    dldt[0].classList.add('ativo')
    dldt[0].nextElementSibling.classList.add('ativo')
    dldt.forEach((dt) => {
      dt.addEventListener('click', clicou)
    })
  }
}
