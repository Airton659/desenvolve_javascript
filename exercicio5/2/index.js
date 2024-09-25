let curtidas = [];


const inputNome = document.getElementById('nome');
const btnCurtir = document.getElementById('curtir-btn');
const status = document.getElementById('status');


function atualizarStatus() {
    const qtdCurtidas = curtidas.length;

    if (qtdCurtidas === 0) {
        status.textContent = "Ninguém curtiu";
    } else if (qtdCurtidas === 1) {
        status.textContent = `${curtidas[0]} curtiu`;
    } else if (qtdCurtidas === 2) {
        status.textContent = `${curtidas[0]} e ${curtidas[1]} curtiram`;
    } else {
        status.textContent = `${curtidas[0]}, ${curtidas[1]} e mais ${qtdCurtidas - 2} pessoas curtiram`;
    }
}


btnCurtir.addEventListener('click', function() {
    const nome = inputNome.value

    if (nome && !curtidas.includes(nome)) {
        curtidas.push(nome);
        atualizarStatus();   
    }

    inputNome.value = ''; 
});
