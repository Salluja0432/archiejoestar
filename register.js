const prompt = require("prompt-sync")();

let total = 0;
let opcao = -1;

while (opcao !== 0) {
  console.log("=== CAIXA REGISTRADORA ===");
  console.log("1 - Arroz: R$ 25");
  console.log("2 - Leite: R$ 6");
  console.log("3 - Pão: R$ 8");
  console.log("0 - Finalizar compra");
  console.log("\n");

  opcao = Number(prompt("Escolha um produto: "));

  if (opcao === 1) {
    total = total + 25;
    console.log("Arroz adicionado!");
    console.log("Total atual: R$ " + total);
  } else if (opcao === 2) {
    total = total + 6;
    console.log("Leite adicionado!");
    console.log("Total atual: R$ " + total);
  } else if (opcao === 3) {
    total = total + 8;
    console.log("Pão adicionado!");
    console.log("Total atual: R$ " + total);
  } else if (opcao === 0) {
    console.log("Compra finalizada!");
  } else {
    console.log("Opção inválida!");
  }
}

console.log("Total final: R$ " + total);
