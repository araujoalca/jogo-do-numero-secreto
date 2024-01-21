titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';


function usarConsole() {
    console.log('O botão foi clicado!');
}

function usarAlert() {
    alert('Eu amo JS!');
}

function usarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function somar() {
    let num1 = parseInt(prompt('Digite o primeiro número inteiro'));
    let num2 = parseInt(prompt('Digite o segundo número inteiro'));

    let soma = num1 + num2;

    alert(`${num1} + ${num2} = ${soma}.`);
}