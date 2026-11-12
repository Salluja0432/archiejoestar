export interface Posicionavel {
  readonly posicaoX: number;
  readonly posicaoY: number;
}

export interface Desenhavel {
  desenhar(): string;
}

export interface Danificavel {
  receberDano(): void;
}
