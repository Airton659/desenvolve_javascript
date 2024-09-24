const titulo = document.getElementById('titulo');
titulo.textContent = 'Título Modificado';

const listaItens = document.querySelectorAll('#lista li');
listaItens.forEach(item => {
    item.classList.add('estilo-lista');
});

const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(p => {
    p.classList.add('classe-paragrafo');
});


const botao = document.getElementById('meu-botao');
botao.textContent = 'Texto Modificado';
