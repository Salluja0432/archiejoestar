const prompt = require('prompt-sync')();

const valores = [];

for (let i = 0; i < 5; i++) {
    valores.push(Number(prompt('Valor ' + (i + 1) + ': ')));
}

console.log('Valores digitados: ' + valores.join(', '));