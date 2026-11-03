const prompt = require('prompt-sync')();

const vetor = [];

for (let i = 0; i < 10; i++) {
    vetor.push(Number(prompt('Número inteiro ' + (i + 1) + ': ')));
}

// troca o primeiro com o último, o segundo com o penúltimo, e assim por diante
for (let i = 0; i < Math.floor(vetor.length / 2); i++) {
    const temporario = vetor[i];
    vetor[i] = vetor[vetor.length - 1 - i];
    vetor[vetor.length - 1 - i] = temporario;
}

console.log('Vetor invertido: ' + vetor.join(', '));