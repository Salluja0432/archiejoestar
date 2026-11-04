const prompt = require('prompt-sync')();

const birthyear = Number(prompt('Em que ano você nasceu? '));
const nowadays = new Date().getFullYear();
const idade = nowadays - birthyear;

console.log('Você tem ' + idade + ' anos.');