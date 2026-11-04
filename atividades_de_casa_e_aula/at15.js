const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 10; i++) {
    numeros.push(Number(prompt('Número inteiro ' + (i + 1) + ': ')));
}

console.log('Números pares digitados e suas posições:');

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log('Valor ' + numeros[i] + ' na posição ' + i);
    }
}