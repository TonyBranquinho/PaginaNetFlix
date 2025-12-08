const menu = document.querySelector('.menu-idiomas');
const botao = document.querySelector('.botao-abrir');

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo'); 
});