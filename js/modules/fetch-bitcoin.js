export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bodyJSON) => {
      const btcPreco = document.querySelector(target)
      // e ssa conta abaixo é para calcular quanto vale 1000 reais em bitcoin
      btcPreco.innerText = (1000 / bodyJSON.BRL.sell).toFixed(4)
    }).catch(erro => console.log(Error(erro)))
}
