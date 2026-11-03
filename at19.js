const prompt = require('prompt-sync')();

const numeros = [];
let soma = 0;

for (let i = 0; i < 8; i++) {
    numeros.push(Number(prompt('Número real ' + (i + 1) + ': ')));
}

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
}

console.log('Soma de todos os valores: ' + soma);