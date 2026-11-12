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
        case 1: // pedra
            if (computador === 3) {
                resultado = 'ganhou';
            } else if (computador === 2) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
        case 2: // papel
            if (computador === 1) {
                resultado = 'ganhou';
            } else if (computador === 3) {
                resultado = 'perdeu';
            } else {
                resultado = 'empate';
            }
            break;
        case 3: // tesoura
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
        console.log('🎉 Você ganhou!');
    } else if (resultado === 'perdeu') {
        console.log('😔 Você perdeu!');
    } else {
        console.log('🤝 Empate!');
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 44da81bbc210352eff2475e80e8257e9e35e0ace
