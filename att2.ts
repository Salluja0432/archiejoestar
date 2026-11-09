class Personagem {
  nome: string;
  private vidas: number;
  pontos: number;

  constructor(nome: string) {
    this.nome = nome;
    this.vidas = 3;
    this.pontos = 0;
  }

  get vidasAtuais(): number {
    return this.vidas;
  }

  set vidasAtuais(novaVida: number) {
    if (novaVida >= 0) {
      this.vidas = novaVida;
    }
  }

  pular(): void {
    console.log(`${this.nome} pulou! 🍄`);
  }

  mostrarStatus(): void {
    console.log(`Nome: ${this.nome}`);
    console.log(`Vidas: ${this.vidas}`);
    console.log(`Pontos: ${this.pontos}`);
  }
}

const mario = new Personagem("Mario");
const luigi = new Personagem("Luigi");

mario.vidasAtuais = 2;
console.log("Mario após perder uma vida:", mario.vidasAtuais);

mario.vidasAtuais = -5;
console.log("Mario após tentar receber -5 vidas:", mario.vidasAtuais);

console.log("===== MARIO =====");
mario.mostrarStatus();
mario.pular();

console.log("===== LUIGI =====");
luigi.mostrarStatus();
luigi.pular();
