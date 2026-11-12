import { Personagem } from "./Personagem";
import { Danificavel } from "./interfaces";
import { Direcao } from "./tipos";
import { PoderDisparo } from "./PoderDisparo";
import { Projetil } from "./Projetil";
import { ALTURA, LARGURA } from "../utils/constantes";

export class Nave extends Personagem implements Danificavel {
  private poderDisparo: PoderDisparo;
  private vidas: number = 3;

  constructor() {
    super(20, ALTURA - 2);
    this.poderDisparo = new PoderDisparo();
  }

  get vidasRestantes(): number {
    return this.vidas;
  }

  set vidasRestantes(valor: number) {
    if (!Number.isInteger(valor) || valor < 0 || valor > 3) {
      throw new Error(
        "A quantidade de vidas deve ser um número inteiro entre 0 e 3.",
      );
    }

    this.vidas = valor;
  }

  receberDano(): void {
    if (this.vidas > 0) {
      this.vidas--;
    }
  }

  mover(direcao: Direcao): void {
    this.x += direcao;

    if (this.x < 0) this.x = 0;
    if (this.x >= LARGURA) this.x = LARGURA - 1;
  }

  moverEsquerda(): void {
    this.mover(-1);
  }

  moverDireita(): void {
    this.mover(1);
  }

  atirar(): Projetil {
    return this.poderDisparo.criarProjetil(this.posicaoX, ALTURA - 3);
  }

  desenhar(): string {
    return "\x1b[36mA\x1b[0m";
  }
}
