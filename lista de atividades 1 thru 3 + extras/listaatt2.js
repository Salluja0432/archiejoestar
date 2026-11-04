
const prompt = require('prompt-sync')();

// ==========================================
//          LISTA DE ATIVIDADES 2
// ==========================================

let parte;
let opcao;

do {
    console.log('');
    console.log('\n================================');
    console.log('\n       LISTA DE ATIVIDADES 2');
    console.log('\n================================');
    console.log('\n1 - Parte 1: FOR');
    console.log('2 - Parte 2: WHILE');
    console.log('3 - Parte 3: DO...WHILE');
    console.log('0 - Sair');
    console.log('================================');

    parte = Number(prompt('Escolha uma parte: '));

    //                 PARTE 1 - atividades feitas majoritariamente usando  FOR

    if (parte === 1) {

        console.log('');
        console.log('=== PARTE 1 - FOR ===');
        console.log('1 - Mostrar números pares de 2 a 100');
        console.log('2 - Tabuada do 7');
        console.log('3 - Soma dos números de 1 a 20');
        console.log('4 - Mostrar números ímpares de 1 a 99');

        opcao = Number(prompt('Escolha o exercício: '));

        if (opcao === 1) {

            for (let i = 2; i <= 100; i += 2) {
                console.log(i);
            }

        } else if (opcao === 2) {

            const numero = 7;

            for (let i = 1; i <= 10; i++) {
                console.log(numero + ' x ' + i + ' = ' + (numero * i));
            }

        } else if (opcao === 3) {

            let soma = 0;

            for (let i = 1; i <= 20; i++) {
                soma += i;
            }

            console.log('A soma dos números de 1 a 20 é: ' + soma);

        } else if (opcao === 4) {

            for (let i = 1; i <= 99; i += 2) {
                console.log(i);
            }

        } else {
            console.log('Exercício inválido!');
        }

    //                PARTE 2 - atividades feitas majoritariamente usando WHILE

    } else if (parte === 2) {

        console.log('');
        console.log('=== PARTE 2 - WHILE ===');
        console.log('1 - Ler números positivos');
        console.log('2 - Mostrar números pares menores que um limite');
        console.log('3 - Somar valores até atingir 100');
        console.log('4 - Contar de 10 até 1');

        opcao = Number(prompt('Escolha o exercício: '));

        if (opcao === 1) {

            let numero = Number(prompt('Digite um número positivo (0 ou negativo para parar): '));

            while (numero > 0) {
                console.log('Você digitou: ' + numero);
                numero = Number(prompt('Digite outro número positivo: '));
            }

            console.log('Fim do programa.');

        } else if (opcao === 2) {

            const limite = Number(prompt('Digite um número limite: '));
            let i = 2;

            while (i < limite) {
                console.log(i);
                i += 2;
            }

        } else if (opcao === 3) {

            let soma = 0;

            while (soma < 100) {
                let valor = Number(prompt('Digite um valor: '));
                soma += valor;
                console.log('Soma atual: ' + soma);
            }

            console.log('A soma atingiu ou ultrapassou 100!');

        } else if (opcao === 4) {

            let i = 10;

            while (i >= 1) {
                console.log(i);
                i--;
            }

        } else {
            console.log('Exercício inválido!');
        }

    //              PARTE 3 - atividades feitas majoritariamente usando DO...WHILE

    } else if (parte === 3) {

        console.log('');
        console.log('=== PARTE 3 - DO...WHILE ===');
        console.log('1 - Menu com opção para sair');
        console.log('2 - Ler até digitar um múltiplo de 5');
        console.log('3 - Cadastrar notas dos alunos');
        console.log('4 - Ler números positivos até digitar zero');

        opcao = Number(prompt('Escolha o exercício: '));

        if (opcao === 1) {

            let escolha;

            do {
                console.log('');
                console.log('=== MENU ===');
                console.log('1 - Opção A');
                console.log('2 - Opção B');
                console.log('0 - Sair');

                escolha = Number(prompt('Escolha uma opção: '));

                if (escolha === 1) {
                    console.log('Você selecionou a Opção A.');
                } else if (escolha === 2) {
                    console.log('Você selecionou a Opção B.');
                } else if (escolha === 0) {
                    console.log('Saindo do programa...');
                } else {
                    console.log('Opção inválida!');
                }

            } while (escolha !== 0);

        } else if (opcao === 2) {

            let numero;

            do {
                numero = Number(prompt('Digite um número (múltiplo de 5 encerra): '));
            } while (numero % 5 !== 0);

            console.log('Parabéns! Você digitou o múltiplo de 5: ' + numero);

        } else if (opcao === 3) {

            let continuar;

            do {
                let nota = Number(prompt('Digite a nota do aluno: '));
                console.log('Nota registrada: ' + nota.toFixed(2));

                continuar = prompt('Deseja cadastrar outra nota? (S/N): ').toUpperCase();

            } while (continuar === 'S');

            console.log('Encerrando o lançamento de notas.');

        } else if (opcao === 4) {

            let numero;

            do {
                numero = Number(prompt('Digite um número positivo (digite 0 para encerrar): '));

                if (numero > 0) {
                    console.log('Número positivo aceito: ' + numero);
                } else if (numero < 0) {
                    console.log('Digite apenas números positivos!');
                }

            } while (numero !== 0);

            console.log('Programa encerrado com o número 0.');

        } else {
            console.log('Exercício inválido!');
        }

    } else if (parte !== 0) {
        console.log('Parte inválida!');
    }

} while (parte !== 0);

console.log('Lista de atividades encerrada!');
