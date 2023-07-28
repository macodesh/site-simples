// Importa o arquivo css.
import './style.css'

// Captura os elementos HTML.
const html = document.querySelector('html') as HTMLHtmlElement
const btn = document.querySelector('.btn') as HTMLButtonElement

// Esse evento de clique muda a classe da tag html e o texto do botão.btn.
btn.addEventListener('click', () => {
  if (html.className !== 'dark') {
    html.classList.add('dark')
    btn.textContent = 'Claro'
  } else {
    html.classList.remove('dark')
    btn.textContent = 'Escuro'
  }
})
