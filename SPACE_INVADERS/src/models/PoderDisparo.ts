import { Projetil } from "./Projetil";

export class PoderDisparo {
  criarProjetil(x: number, y: number): Projetil {
    return new Projetil(x, y);
  }
}
