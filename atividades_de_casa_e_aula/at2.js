const prompt = require('prompt-sync')();

const horas = Number(prompt('Horas trabalhadas: '));
const salario = horas * 51.90;

console.log('Salário: R$ ' + salario.toFixed(2));