
function atualizarTempo(){
var display = document.querySelector('.display');

var agora = new Date();

var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());

display.textContent = horario;
}

function corrigirHorario(numero){
    if(numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

setInterval(atualizarTempo, 1000);
