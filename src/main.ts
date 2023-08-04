import './style.css'

const html = document.querySelector('html') as HTMLHtmlElement
const btn = document.querySelector('.btn') as HTMLButtonElement

btn.addEventListener('click', () => {
  if (html.className !== 'dark') {
    html.classList.add('dark')
    btn.textContent = 'Claro'
  } else {
    html.classList.remove('dark')
    btn.textContent = 'Escuro'
  }
})
