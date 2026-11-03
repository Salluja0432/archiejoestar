const prompt = require('prompt-sync')();

const nomes = [];
const notas = [];

for (let i = 0; i < 10; i++) {
    nomes.push(prompt('Nome do aluno ' + (i + 1) + ': '));
}

for (let i = 0; i < 10; i++) {
    notas.push(Number(prompt('Nota de ' + nomes[i] + ': ')));
}

for (let i = 0; i < 10; i++) {
    console.log(nomes[i] + ': ' + notas[i]);
}