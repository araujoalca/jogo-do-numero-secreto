let numerosSorteados = [];
let numeroLimiteMaximo = 100;
let numeroSecreto;
let tentativas;
let speak = true;
reiniciarJogo();



function exibirTextoNaTela(tag, texto, speak) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if(speak) {
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    }
    
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let chutes = document.querySelector('#chutes');
    let txtChutes = `${chutes.innerHTML} (${chute})`;

    exibirTextoNaTela('#chutes', txtChutes, !speak);


    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

        exibirTextoNaTela('h1', 'Acertou', speak);
        exibirTextoNaTela('p', `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`, speak);
        document.querySelector('#reiniciar').removeAttribute('disabled');
        document.querySelector('#chutar').setAttribute('disabled', true);
        document.querySelector('input').style.background = '#00aa00';
        document.querySelector('input').style.textAlign = 'center';
        
     
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`, speak);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`, speak);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimiteMaximo + 1);

    if( numerosSorteados.length === numeroLimiteMaximo ) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.querySelector('input').style.background = '#fff';
    document.querySelector('input').style.textAlign = 'left';
    exibirTextoNaTela('h1', 'Jogo do Número Secreto', speak);
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimiteMaximo}`, speak);
    document.querySelector('#chutar').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    limparCampo();

    //console.log(`O número secreto é ${numeroSecreto}`);  // teste
}