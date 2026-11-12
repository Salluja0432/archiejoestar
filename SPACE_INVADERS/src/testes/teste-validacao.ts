import { Nave } from "../models/Nave";

const nave = new Nave();

console.log("Vidas iniciais:", nave.vidasRestantes);

nave.vidasRestantes = 2;

console.log("Após atribuir 2:", nave.vidasRestantes);

try {
  nave.vidasRestantes = 5;
  console.log("ERRO: o valor inválido foi aceito.");
} catch (erro) {
  console.log("Teste aprovado: valor inválido rejeitado.");

  if (erro instanceof Error) {
    console.log(erro.message);
  }
}

console.log("Vidas finais:", nave.vidasRestantes);
