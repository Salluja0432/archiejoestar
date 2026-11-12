import { Posicionavel, Desenhavel } from "./interfaces";
import { Direcao } from "./tipos";

export abstract class Personagem implements Posicionavel, Desenhavel {
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get posicaoX(): number {
    return this.x;
  }

  get posicaoY(): number {
    return this.y;
  }

  abstract mover(direcao: Direcao): void;
  abstract desenhar(): string;
}
