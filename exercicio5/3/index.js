
let tarefas = [];


const inputTarefa = document.getElementById('tarefa-input');
const btnAdicionar = document.getElementById('adicionar-btn');
const listaTarefas = document.getElementById('lista-tarefas');


function renderizarTarefas() {
    
    listaTarefas.innerHTML = '';

    
    tarefas.forEach((tarefa, index) => {
        
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;

        
        checkbox.addEventListener('change', function() {
            tarefa.status = checkbox.checked;
            atualizarEstiloTarefa(li, tarefa.status);
        });

        
        const descricao = document.createElement('span');
        descricao.textContent = tarefa.descricao;

        
        atualizarEstiloTarefa(li, tarefa.status);

        
        li.appendChild(checkbox);
        li.appendChild(descricao);
        listaTarefas.appendChild(li);
    });
}


function atualizarEstiloTarefa(elemento, status) {
    if (status) {
        elemento.className = 'concluida';
    } else {
        elemento.className = 'nao-concluida';
    }
}


btnAdicionar.addEventListener('click', function() {
    const descricao = inputTarefa.value.trim();

    
    if (descricao) {
        
        tarefas.push({ descricao, status: false });

        
        inputTarefa.value = '';
        renderizarTarefas();
    }
});


renderizarTarefas();
