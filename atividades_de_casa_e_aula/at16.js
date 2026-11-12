const prompt = require('prompt-sync')();

const idades = [];

for (let i = 0; i < 8; i++) {
    idades.push(Number(prompt('Idade da pessoa ' + (i + 1) + ': ')));
}

// a) média
let soma = 0;
for (let i = 0; i < idades.length; i++) {
    soma = soma + idades[i];
}
console.log('a) Média de idade: ' + (soma / idades.length).toFixed(1));

// b) posições com mais de 25 anos
console.log('b) Posições com mais de 25 anos:');
for (let i = 0; i < idades.length; i++) {
    if (idades[i] > 25) {
        console.log('   posição ' + i + ' (' + idades[i] + ' anos)');
    }
}

// c) maior idade
let maior = idades[0];
for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maior) {
        maior = idades[i];
    }
}
console.log('c) Maior idade: ' + maior);

// d) posições da maior idade
console.log('d) Posições da maior idade:');
for (let i = 0; i < idades.length; i++) {
    if (idades[i] === maior) {
        console.log('   posição ' + i);
    }
}