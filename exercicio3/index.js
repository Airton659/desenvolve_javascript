
function calcularTempoRestante(dataFutura) {
    const agora = new Date().getTime();
    const diferenca = dataFutura - agora; 
    const segundosDeUmMinuto = 60 * 1000
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 * segundosDeUmaHora


    

    const segundos = Math.floor((diferenca % segundosDeUmMinuto) / 1000);
    const minutos = Math.floor((diferenca % segundosDeUmaHora) / segundosDeUmMinuto);
    const horas = Math.floor((diferenca % segundosDoDia) / segundosDeUmaHora);
    const dias = Math.floor(diferenca / segundosDoDia);

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

function atualizarTemporizador(dataFutura) {
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').textContent = `Dias: ${tempoRestante.dias}`;
    document.getElementById('horas').textContent = `Horas: ${tempoRestante.horas}`;
    document.getElementById('minutos').textContent = `Minutos: ${tempoRestante.minutos}`;
    document.getElementById('segundos').textContent =`Segundos: ${ tempoRestante.segundos}`;
}


// const intervalo = setInterval(atualizarTemporizador,1000);

function iniciarTemporizador(dataFutura) {
    setInterval(() => {
        atualizarTemporizador(dataFutura);
    }, 1000);
}


const dataFutura = new Date('2024-12-31T23:59:59').getTime(); 
iniciarTemporizador(dataFutura)
