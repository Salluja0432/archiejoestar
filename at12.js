const prompt = require('prompt-sync')();

const vetor = [10, 25, 3, 47, 8, 25];
const procurado = Number(prompt('Qual número você quer procurar? '));
let encontrou = false;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === procurado) {
        console.log('Número encontrado na posição ' + i);
        encontrou = true;
    }
}

if (!encontrou) {
    console.log('O número não existe no vetor.');
}