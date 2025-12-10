const menu = document.querySelector('.menu-idiomas');
const botao = document.querySelector('.botao-abrir');

botao.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('ativo'); 
});

 // Fechar o dropdown ao clicar fora dele
document.addEventListener('click', () => {
    menu.classList.remove('ativo');           
});

window.location.hash = "#one1";