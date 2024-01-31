import ScrollSuave from './modules/scroll-suave.js'
import AccordionList from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
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

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

iniciartooltip()
iniciarDropdownMenu()
iniciarMenuMobile()
iniciarFuncionamento()
iniciarFetchAnimais()
iniciarFetchBitcoin()
animacaodoscroll()
