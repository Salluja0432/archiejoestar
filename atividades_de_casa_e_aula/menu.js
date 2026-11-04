const prompt = require('prompt-sync')();

let opcao;

do {
    console.log('');
    console.log('=== MENU ===');
    console.log('1 - Tabuada de um número');
    console.log('2 - Contar de 1 até um número');
    console.log('3 - Mostrar os números pares até um número');
    console.log('4 - Mostrar os números ímpares até um número');
    console.log('0 - Sair');

    opcao = Number(prompt('Escolha uma opção: '));

    if (opcao === 1) {
        const numero = Number(prompt('Tabuada de qual número? '));
        for (let i = 1; i <= 10; i++) {
            console.log(numero + ' x ' + i + ' = ' + numero * i);
        }
    } else if (opcao === 2) {
        const limite = Number(prompt('Contar até quanto? '));
        for (let i = 1; i <= limite; i++) {
            console.log(i);
        }
    } else if (opcao === 3) {
        const limite = Number(prompt('Pares até quanto? '));
        for (let par = 2; par <= limite; par = par + 2) {
            console.log(par);
        }
    } else if (opcao === 4) {
        const limite = Number(prompt('Ímpares até quanto? '));
        for (let impar = 1; impar <= limite; impar = impar + 2) {
            console.log(impar);
        }
    } else if (opcao === 0) {
        console.log('Até a próxima!');
    } else {
        console.log('Opção inválida!');
    }
} while (opcao !== 0);