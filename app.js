let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirInicio() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirInicio()
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns pelo chute!');
        let palavratentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela('p', `Você descobriu com ${tentativas} ${palavratentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()    
    }
}

function gerarNumero() {
    return parseInt(Math.random() * 100 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero()
    limparCampo()
    tentativas = 1
    exibirInicio()
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}