
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('btn-menu-mobile')
let overlay = document.getElementById('overlay-menu')
let btnFechar = document.querySelector('.btn-fechar') 
let btnFecharSessao = document.getElementById('btn-fechar-lista')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
    overlay.style.display = 'block'
})

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
    overlay.style.display = 'none'
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
    overlay.style.display = 'none'
})
btnFecharSessao.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu');
    overlay.style.display = "none";
})
