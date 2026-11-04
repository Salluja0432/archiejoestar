// ==========================================
//   ATIVIDADES INICIAIS - CÓDIGOS A REVISAR
// ==========================================
// Este arquivo preserva os trechos originais que apresentaram
// conflito de merge ou erro de implementação.
// Os códigos estão comentados para que este arquivo possa ser aberto
// sem provocar erro de sintaxe.
// Não execute estes trechos esperando que funcionem.


// ==========================================
// 1 - imparpar.js
// PROBLEMA: console.log não foi chamado com parênteses.
// O valor de i também não está sendo passado para impressão.
/*
for (let i = 1; i <= 300; i++) {
  console.log;
  i;
}
*/


// ==========================================
// 2 - pptold.js
// PROBLEMAS:
// - prompt() retorna texto, mas as opções são comparadas com números.
// - A condição usa || (OU); desse jeito, a validação sempre acusa
//   uma opção inválida, independentemente do número informado.
/*
const prompt = require('prompt-sync')();

const nomes = ['pedra', 'papel', 'tesoura'];

console.log('=== PEDRA, PAPEL E TESOURA ===');
console.log('1 - Pedra');
console.log('2 - Papel');
console.log('3 - Tesoura');

const jogador = prompt('Sua escolha (1, 2 ou 3): ');

if (jogador !== 1 || jogador !== 2 || jogador !== 3) {
    console.log('Opção inválida! Rode de novo e digite 1, 2 ou 3.');
} else {
    const computador = Math.floor(Math.random() * 3) + 1;

    console.log('Você: ' + nomes[jogador - 1]);
    console.log('Computador: ' + nomes[computador - 1]);

    let resultado = '';

    switch (jogador) {
        case 1:
            if (computador === 3) {
                resultado = 'ganhou';
            } else if (computador === 2) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
        case 2:
            if (computador === 1) {
                resultado = 'ganhou';
            } else if (computador === 3) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
        case 3:
            if (computador === 2) {
                resultado = 'ganhou';
            } else if (computador === 1) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
    }

    if (resultado === 'ganhou') {
        console.log('Você ganhou!');
    } else if (resultado === 'perdeu') {
        console.log('Você perdeu!');
    } else {
        console.log('Empate!');
    }
}
*/


// ==========================================
// 3 - ppt.js
// PROBLEMA: o arquivo atual contém marcadores de conflito
// do Git (<<<<<<<, ======= e >>>>>>>).
// Esses marcadores não fazem parte da linguagem JavaScript.
// O conteúdo original foi preservado abaixo, dentro de comentário.
/*
const prompt = require('prompt-sync')();

const nomes = ['pedra', 'papel', 'tesoura'];

console.log('=== PEDRA, PAPEL E TESOURA ===');
console.log('1 - Pedra');
console.log('2 - Papel');
console.log('3 - Tesoura');

<<<<<<< HEAD
// Convertemos o valor digitado para número inteiro usando Number()
const jogador = Number(prompt('Sua escolha (1, 2 ou 3): '));

// Agora usamos && (E), pois se o jogador digitar 1, ele é diferente de 2 e 3,
// então usar || fecharia o programa em qualquer hipótese.
=======
const jogador = Number(prompt('Sua escolha (1, 2 ou 3): '));

>>>>>>> 44da81bbc210352eff2475e80e8257e9e35e0ace

if (jogador !== 1 && jogador !== 2 && jogador !== 3) {
    console.log('Opção inválida! Rode de novo e digite 1, 2 ou 3.');
} else {
    const computador = Math.floor(Math.random() * 3) + 1;

    console.log('Você: ' + nomes[jogador - 1]);
    console.log('Computador: ' + nomes[computador - 1]);

    let resultado = '';

    switch (jogador) {
        case 1:
            if (computador === 3) {
                resultado = 'ganhou';
            } else if (computador === 2) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
        case 2:
            if (computador === 1) {
                resultado = 'ganhou';
            } else if (computador === 3) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
        case 3:
            if (computador === 2) {
                resultado = 'ganhou';
            } else if (computador === 1) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
    }

    if (resultado === 'ganhou') {
        console.log('Você ganhou!');
    } else if (resultado === 'perdeu') {
        console.log('Você perdeu!');
    } else {
        console.log('Empate!');
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 44da81bbc210352eff2475e80e8257e9e35e0ace
*/
