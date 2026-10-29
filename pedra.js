// Pedra, Papel e Tesoura - rodar com: node pedra-papel-tesoura.js
const readline = require("readline");

const opcoes = ["pedra", "papel", "tesoura"];

// Quem ganha de quem: a chave vence o valor
const vence = {
  pedra: "tesoura",
  papel: "pedra",
  tesoura: "papel",
};

const placar = { jogador: 0, computador: 0, empates: 0 };

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function escolhaDoComputador() {
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];
}

function normalizar(texto) {
  const t = texto.trim().toLowerCase();
  if (t === "1") return "pedra";
  if (t === "2") return "papel";
  if (t === "3") return "tesoura";
  return t;
}

function decidirVencedor(jogador, computador) {
  if (jogador === computador) return "empate";
  return vence[jogador] === computador ? "jogador" : "computador";
}

function mostrarPlacar() {
  console.log(
    `\nPlacar -> Você: ${placar.jogador} | Computador: ${placar.computador} | Empates: ${placar.empates}`
  );
}

function perguntar(texto) {
  return new Promise((resolve) => rl.question(texto, resolve));
}

async function jogar() {
  console.log("=== PEDRA, PAPEL E TESOURA ===");
  console.log("Digite pedra, papel ou tesoura (ou 1, 2, 3).");
  console.log("Digite 'sair' para encerrar.\n");

  while (true) {
    const entrada = normalizar(
      await perguntar("Sua jogada (1-pedra, 2-papel, 3-tesoura): ")
    );

    if (entrada === "sair") break;

    if (!opcoes.includes(entrada)) {
      console.log("Opção inválida! Tente de novo.\n");
      continue;
    }

    const computador = escolhaDoComputador();
    console.log(`Você escolheu: ${entrada}`);
    console.log(`Computador escolheu: ${computador}`);

    const resultado = decidirVencedor(entrada, computador);

    if (resultado === "empate") {
      console.log("Empate!");
      placar.empates++;
    } else if (resultado === "jogador") {
      console.log("Você ganhou! 🎉");
      placar.jogador++;
    } else {
      console.log("O computador ganhou! 🤖");
      placar.computador++;
    }

    mostrarPlacar();
    console.log();
  }

  console.log("\nFim de jogo! Placar final:");
  mostrarPlacar();
  rl.close();
}

jogar();