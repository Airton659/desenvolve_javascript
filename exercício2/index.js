const estoque = [
    {id: 2035, titulo: 'Harry Potter', autor: 'desconhecido', quantidade:45},
    {id: 2145, titulo: 'Harry Potter II', autor: 'desconhecido', quantidade:453},
    {id: 4587, titulo: 'O Senhor dos Anéis', autor: 'desconhecido', quantidade:789},
    {id: 3565, titulo: 'Duna', autor: 'desconhecido', quantidade:365},
    {id: 7854, titulo: 'Fundação', autor: 'desconhecido', quantidade:874}
];

const adicionaLivro = (idDoLivro, titulo, autor, quantidade) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    
    if(!existeIdNoEstoque) {
        estoque.push({
            idDoLivro,
            titulo,
            autor,
            quantidade
        })
        console.log(`O livro '${titulo}' foi adicionado ao estoque`)
    }
    else{
        console.log(`O id ${idDoLivro} já existe no estoque`)
    }

}

const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    
    if(existeIdNoEstoque) {
        for(let indice = 0; indice < estoque.length;indice ++){
            if(estoque[indice].id === idDoLivro){
                console.log(`O livro de id ${idDoLivro} foi removido`)
                estoque.splice(indice,1);                
                break;
            }
        }
    }
    else{
        console.log(`O livro de id ${idDoLivro} não foi encontrado`)
    }
}

const atualizaQuantidade = (idDoLivro,novaquantidade) => {
    const existeIdNoEstoque = !!estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for(let indice = 0; indice < estoque.length;indice ++){
            if(estoque[indice].id === idDoLivro){
                console.log(`A quantidade do livro ${estoque[indice].titulo} foi atualizada para ${novaquantidade}`)
                estoque[indice].quantidade = novaquantidade
                break;
            }
        }
    }
    else{
        console.log(`O livro de id ${idDoLivro} não foi encontrado`)
    }
}

const listarLivros = () => {
    if(estoque.length === 0){
        console.log('O estoque está vazio');
    }
    else {
        console.log(`O estoque possui ${estoque.length} livros.`)
        for (let livro of estoque){
            console.log(`ID: ${livro.id}
Livro: ${livro.titulo}
Autor: ${livro.autor}
Quantidade: ${livro.quantidade}`
            )
        }
    }

}



// listarLivros();
// adicionaLivro(5489, 'Testando a função de adicionar', 'Teste', 3)
// listarLivros();
// atualizaQuantidade(5489,32);
// listarLivros()
// removeLivro(5489);
// listarLivros()


const executaEMostraLista = (acao, mostraLista) => {
    acao();
    mostraLista();
}

executaEMostraLista(() => adicionaLivro(5489, 'Testando a função de adicionar', 'Teste', 3), () => listarLivros())