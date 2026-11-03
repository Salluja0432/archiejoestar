const prompt = require('prompt-sync')();

const idades = [];

for (let i = 0; i < 5; i++) {
    idades.push(Number(prompt('Idade da pessoa ' + (i + 1) + ': ')));
}

let maior = idades[0];
let menor = idades[0];

for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maior) {
        maior = idades[i];
    }
    if (idades[i] < menor) {
        menor = idades[i];
    }
}

console.log('Maior idade: ' + maior);
console.log('Menor idade: ' + menor);