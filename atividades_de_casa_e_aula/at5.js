const prompt = require('prompt-sync')();

const idade = Number(prompt('Idade: '));

if (idade >= 18) {
    console.log('Trabalho Formal');
} else {
    console.log('Livre ou Aposentado');
}