const prompt = require('prompt-sync')();

const cursando = prompt('Está cursando o ensino médio? (SIM/NAO): ').toUpperCase();
const idade = Number(prompt('Idade: '));

if (cursando === 'SIM' && idade < 18) {
    console.log('Aprovado para próxima fase');
} else {
    console.log('Não atende aos critérios');
}