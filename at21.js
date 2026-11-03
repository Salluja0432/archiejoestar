const prompt = require('prompt-sync')();

const numeros = [];
let pares = 0;
let impares = 0;

for (let i = 0; i < 6; i++) {
    numeros.push(Number(prompt('Número inteiro ' + (i + 1) + ': ')));
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log('Pares: ' + pares);
console.log('Ímpares: ' + impares);