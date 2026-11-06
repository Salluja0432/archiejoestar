class personagem {
  nome: string;
  vidas: number;
  pontos: number;

  constructor(nome: string) {
    this.nome = nome;
    this.vidas = 3;
    this.pontos = 0;
  }

  pular(): void {
    console.log(`${this.nome} pulou!`);
  }
}

// Criando objetos:
const mario = new personagem("Mario");
const luigi = new personagem("Luigi");

mario.pular();
luigi.pular();
