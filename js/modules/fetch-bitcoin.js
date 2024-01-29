export default function iniciarFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bodyJSON) => {
      const btcPreco = document.querySelector('.btc-preco')
      // essa conta abaixo é para calcular quanto vale 1000 reais em bitcoin
      btcPreco.innerText = (1000 / bodyJSON.BRL.sell).toFixed(4)
      // console.log(bodyJSON.BRL.sell)
    })
    .catch((erro) => {
      console.log(Error(erro))
    })
}
