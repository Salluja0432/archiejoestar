const prompt = require('prompt-sync')();

const cavalos = Number(prompt('Quantos cavalos foram comprados? '));
const ferraduras = cavalos * 4;

console.log('Ferraduras necessárias: ' + ferraduras);