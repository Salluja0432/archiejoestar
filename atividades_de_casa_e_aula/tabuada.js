const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite o número da tabuada: '));

for (let i = 1; i <= 10; i++) {
    console.log(numero + ' x ' + i + ' = ' + numero * i);
}