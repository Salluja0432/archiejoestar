const prompt = require('prompt-sync')();

const nomes = ['pedra', 'papel', 'tesoura'];

console.log('=== PEDRA, PAPEL E TESOURA ===');
console.log('1 - Pedra');
console.log('2 - Papel');
console.log('3 - Tesoura');

const jogador = Number(prompt('Sua escolha (1, 2 ou 3): '));

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
}
