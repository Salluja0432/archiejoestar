const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 15; i++) {
    numeros.push(Number(prompt('Número ' + (i + 1) + ': ')));
}

console.log('Vetor: ' + numeros.join(', '));
console.log('Posições dos múltiplos de 10:');

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 10 === 0) {
        console.log('Posição ' + i + ' (valor ' + numeros[i] + ')');
    }
}