const prompt = require('prompt-sync')();

const cateto1 = Number(prompt('Primeiro cateto: '));
const cateto2 = Number(prompt('Segundo cateto: '));
const area = (cateto1 * cateto2) / 2;

console.log('Área do triângulo: ' + area);