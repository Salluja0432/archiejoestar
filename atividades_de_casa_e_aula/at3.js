const prompt = require('prompt-sync')();

const nome = prompt('Nome do cliente: ');
const total = Number(prompt('Valor total da compra: '));
const totalComDesconto = total * 0.85;

console.log('Cliente: ' + nome);
console.log('Total com 15% de desconto: R$ ' + totalComDesconto.toFixed(2));