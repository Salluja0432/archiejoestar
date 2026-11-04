const prompt = require('prompt-sync')();

const latas = Number(prompt('Quantas latas de 350 ml? '));
const garrafas600 = Number(prompt('Quantas garrafas de 600 ml? '));
const garrafas2l = Number(prompt('Quantas garrafas de 2 litros? '));

const litros = latas * 0.35 + garrafas600 * 0.6 + garrafas2l * 2;

console.log('Total comprado: ' + litros.toFixed(2) + ' litros');