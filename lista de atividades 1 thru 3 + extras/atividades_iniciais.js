const prompt = require('prompt-sync')();

// ==========================================
//       ATIVIDADES INICIAIS - JOVEM TECH
// ==========================================
// Reúne exercícios dos commits de 27/10, 28/10 e 29/10.
// As Listas de Atividades 1, 2 e 3 permanecem em arquivos separados.

let opcao;

do {
    console.log('');
    console.log('================================');
    console.log('     ATIVIDADES INICIAIS');
    console.log('================================');
    console.log('1 - Atividade: verificar idade para votar');
    console.log('2 - Votação com idade fixa');
    console.log('3 - Jogo de adivinhação');
    console.log('4 - Contagens: números, ímpares e pares');
    console.log('5 - Contador de 1 até 300');
    console.log('6 - Pedra, papel e tesoura');
    console.log('7 - Caixa registradora');
    console.log('0 - Sair');
    console.log('================================');

    opcao = Number(prompt('Escolha uma atividade: '));

    // ==========================================
    // 1 - ATIVIDADE: VERIFICAR IDADE PARA VOTAR
    // Arquivo original: atividade.js
    // ==========================================

    if (opcao === 1) {

        let idade = Number(prompt('Digite sua idade: '));

        if (idade >= 16) {
            console.log('Você pode votar!');
        } else {
            console.log('Você ainda não pode votar.');
        }

    // ==========================================
    // 2 - VOTAÇÃO COM IDADE FIXA
    // Arquivo original: votação.js
    // ==========================================

    } else if (opcao === 2) {

        const idade = 17;

        if (idade > 16) {
            console.log('Você pode votar!');
        } else {
            console.log('Você ainda não pode votar.');
        }

    // ==========================================
    // 3 - JOGO DE ADIVINHAÇÃO
    // Arquivo original: palpite.js
    // ==========================================

    } else if (opcao === 3) {

        const numeroSecreto = Math.floor(Math.random() * 10) + 1;

        let palpite = prompt('Tente adivinhar o número secreto entre 1 e 10: ');
        palpite = parseInt(palpite);

        if (palpite === numeroSecreto) {
            console.log('Parabéns! Você acertou o número secreto!');
        } else if (palpite > numeroSecreto) {
            console.log('Quase! Seu palpite foi maior do que o número secreto.');
        } else if (palpite < numeroSecreto) {
            console.log('Quase! Seu palpite foi menor do que o número secreto.');
        } else {
            console.log('Entrada inválida. Você digitou um número válido?');
        }

    // ==========================================
    // 4 - CONTAGENS: NÚMEROS, ÍMPARES E PARES
    // Arquivo original: 300iimpar.js
    // ==========================================

    } else if (opcao === 4) {

        for (let i = 0; i <= 300; i++) {
            console.log('Número: ' + i);
        }
        console.log('Os 300 primeiros números!');

        for (let im = 1; im <= 599; im = im + 2) {
            console.log('Número: ' + im);
        }
        console.log('Os 300 primeiros ímpares!');

        for (let par = 0; par <= 600; par = par + 2) {
            console.log('Número: ' + par);
        }
        console.log('Os 300 primeiros pares!');

    // ==========================================
    // 5 - CONTADOR DE 1 ATÉ 300
    // Arquivo original: contador.js
    // ==========================================

    } else if (opcao === 5) {

        let contador = 1;

        while (contador <= 300) {
            console.log(contador);
            contador = contador + 1;
        }

    // ==========================================
    // 6 - PEDRA, PAPEL E TESOURA
    // Versão simplificada para integrar ao menu,
    // baseada no jogo do arquivo original pedra.js.
    // ==========================================

    } else if (opcao === 6) {

        const opcoes = ['pedra', 'papel', 'tesoura'];
        let continuar = 'S';

        while (continuar === 'S') {

            const jogador = prompt('Escolha pedra, papel ou tesoura: ').toLowerCase();
            const indiceComputador = Math.floor(Math.random() * 3);
            const computador = opcoes[indiceComputador];

            console.log('Você escolheu: ' + jogador);
            console.log('Computador escolheu: ' + computador);

            if (jogador !== 'pedra' && jogador !== 'papel' && jogador !== 'tesoura') {
                console.log('Opção inválida!');
            } else if (jogador === computador) {
                console.log('Empate!');
            } else if (
                (jogador === 'pedra' && computador === 'tesoura') ||
                (jogador === 'papel' && computador === 'pedra') ||
                (jogador === 'tesoura' && computador === 'papel')
            ) {
                console.log('Você ganhou!');
            } else {
                console.log('O computador ganhou!');
            }

            continuar = prompt('Deseja jogar novamente? (S/N): ').toUpperCase();
        }

    // ==========================================
    // 7 - CAIXA REGISTRADORA
    // Arquivo original: register.js
    // ==========================================

    } else if (opcao === 7) {

        let total = 0;
        let produto = -1;

        while (produto !== 0) {
            console.log('');
            console.log('=== CAIXA REGISTRADORA ===');
            console.log('1 - Arroz: R$ 25');
            console.log('2 - Leite: R$ 6');
            console.log('3 - Pão: R$ 8');
            console.log('0 - Finalizar compra');

            produto = Number(prompt('Escolha um produto: '));

            if (produto === 1) {
                total = total + 25;
                console.log('Arroz adicionado!');
                console.log('Total atual: R$ ' + total);
            } else if (produto === 2) {
                total = total + 6;
                console.log('Leite adicionado!');
                console.log('Total atual: R$ ' + total);
            } else if (produto === 3) {
                total = total + 8;
                console.log('Pão adicionado!');
                console.log('Total atual: R$ ' + total);
            } else if (produto === 0) {
                console.log('Compra finalizada!');
            } else {
                console.log('Opção inválida!');
            }
        }

        console.log('Total final: R$ ' + total);

    } else if (opcao !== 0) {
        console.log('Atividade inválida!');
    }

} while (opcao !== 0);

console.log('Atividades iniciais encerradas!');
