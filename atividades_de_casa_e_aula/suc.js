const prompt = require('prompt-sync')();

const n = Number(prompt('Digite um valor numérico inteiro: '));

console.log('Sucessor: ' + (n + 1));
console.log('Antecessor: ' + (n - 1));