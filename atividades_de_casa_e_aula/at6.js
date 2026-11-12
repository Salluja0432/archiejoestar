const prompt = require('prompt-sync')();

const idade = Number(prompt('Idade: '));

if (idade >= 60) {
    console.log('Aposentado');
} else {
    console.log('Trabalho Formal');
}