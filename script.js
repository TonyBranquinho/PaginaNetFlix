const menu = document.querySelector('.menu-suspenso');
const botao = document.querySelector('.botao-abrir');

botao.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});