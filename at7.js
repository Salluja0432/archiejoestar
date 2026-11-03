const prompt = require('prompt-sync')();

const total = Number(prompt('Valor total da compra: '));
const cartao = prompt('Tem cartão fidelidade? (SIM/NAO): ').toUpperCase();

if (cartao === 'SIM' || total > 500) {
    const comDesconto = total * 0.8;
    console.log('Desconto de 20% aplicado. Total: R$ ' + comDesconto.toFixed(2));
} else {
    console.log('Sem desconto. Total: R$ ' + total.toFixed(2));
}