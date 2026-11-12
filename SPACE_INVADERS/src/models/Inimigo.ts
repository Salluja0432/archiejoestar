import { Personagem } from "./Personagem";
import { Direcao } from "./tipos";

export class Inimigo extends Personagem {
  constructor(x: number, y: number) {
    super(x, y);
  }

  mover(direcao: Direcao): void {
    this.x += direcao;
  }

  descer(): void {
    this.y++;
  }

  reiniciar(): void {
    this.y = 1;
  }

  desenhar(): string {
    return "\x1b[31mV\x1b[0m";
  }
}

export class InimigoVerde extends Inimigo {
  desenhar(): string {
    return "\x1b[32mV\x1b[0m";
  }
}

export class InimigoAmarelo extends Inimigo {
  desenhar(): string {
    return "\x1b[33mW\x1b[0m";
  }
}

export class InimigoRoxo extends Inimigo {
  desenhar(): string {
    return "\x1b[35mM\x1b[0m";
  }
}
