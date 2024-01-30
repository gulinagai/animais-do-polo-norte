import ScrollSuave from './modules/scroll-suave.js'
import AccordionList from './modules/accordion.js'
import iniciarnavtab from './modules/tabnav.js'
import iniciarmodal from './modules/modal.js'
import iniciartooltip from './modules/tooltip.js'
import iniciarDropdownMenu from './modules/dropdown-menu.js'
import iniciarMenuMobile from './modules/menu-mobile.js'
import iniciarFuncionamento from './modules/funcionamento.js'
import iniciarFetchAnimais from './modules/fetch-animais.js'
import iniciarFetchBitcoin from './modules/fetch-bitcoin.js'
import animacaodoscroll from './modules/scroll-animacao.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new AccordionList('[data-anime="accordion"] dt')
accordion.init()

iniciarnavtab()
iniciarmodal()
iniciartooltip()
iniciarDropdownMenu()
iniciarMenuMobile()
iniciarFuncionamento()
iniciarFetchAnimais()
iniciarFetchBitcoin()
animacaodoscroll()
