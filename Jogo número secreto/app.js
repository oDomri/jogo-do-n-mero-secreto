let numeroLimite = 10
let listaDeNumerosSorteados = []
let tentativa = 1;
let numeroSecreto = gerarNumeroAleatorio();

function reiniciarJogo() {
    limparCampo();
    tentativa = 1;
    numeroSecreto = gerarNumeroAleatorio();
    mensagemIncial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = (parseInt(Math.random() * numeroLimite + 1));
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        console.log(listaDeNumerosSorteados)
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavra = tentativa > 1 ? 'tentativas' : 'tentativa';
    let palavraTentativa = `Você descobriu o número secreto com ${tentativa} ${palavra}.`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Quase lá!!');
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('h1', 'Quase lá!!');
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativa ++;
        limparCampo();
    }
}
mensagemIncial()
