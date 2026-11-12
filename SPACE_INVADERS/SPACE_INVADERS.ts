import * as readline from "readline";

const ALTURA = 12;
const LARGURA = 40;

interface Posicionavel {
  readonly posicaoX: number;
  readonly posicaoY: number;
}

interface Desenhavel {
  desenhar(): string;
}

interface Danificavel {
  receberDano(): void;
}

abstract class Personagem implements Posicionavel, Desenhavel {
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

  abstract mover(direcao: number): void;
  abstract desenhar(): string;
}

class Nave extends Personagem implements Danificavel {
  private poderDisparo: PoderDisparo;
  private vidas: number = 3;

  constructor() {
    super(20, ALTURA - 2);
    this.poderDisparo = new PoderDisparo();
  }

  get vidasRestantes(): number {
    return this.vidas;
  }

  receberDano(): void {
    if (this.vidas > 0) {
      this.vidas--;
    }
  }

  mover(direcao: number): void {
    this.x += direcao;

    if (this.x < 0) {
      this.x = 0;
    }

    if (this.x >= LARGURA) {
      this.x = LARGURA - 1;
    }
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
    return "A";
  }
}

class Projetil {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  mover(): void {
    this.y--;
  }
}

class PoderDisparo {
  criarProjetil(x: number, y: number): Projetil {
    return new Projetil(x, y);
  }
}

class Inimigo extends Personagem {
  constructor(x: number, y: number) {
    super(x, y);
  }

  mover(direcao: number): void {
    this.x += direcao;
  }

  descer(): void {
    this.y++;
  }

  reiniciar(): void {
    this.y = 1;
  }

  desenhar(): string {
    return "V";
  }
}

const minhaNave = new Nave();

const projeteis: Projetil[] = [];

const inimigos: Inimigo[] = [
  new Inimigo(5, 1),
  new Inimigo(15, 1),
  new Inimigo(25, 1),
];

let pontos = 0;
let direcaoInimigos = 1;
let contadorMovimento = 0;
let jogoAtivo = true;

function desenharTela(): void {
  console.clear();

  const personagens: Personagem[] = [minhaNave, ...inimigos];

  for (let y = 0; y < ALTURA; y++) {
    let linha = "";

    for (let x = 0; x < LARGURA; x++) {
      let caractere = " ";

      for (const personagem of personagens) {
        if (personagem.posicaoX === x && personagem.posicaoY === y) {
          caractere = personagem.desenhar();
        }
      }

      for (const projetil of projeteis) {
        if (projetil.x === x && projetil.y === y) {
          caractere = "|";
        }
      }

      linha += caractere;
    }

    console.log("|" + linha + "|");
  }

  console.log("Pontuação:", pontos);
  console.log("Inimigos restantes:", inimigos.length);
  console.log("Vidas:", minhaNave.vidasRestantes);
  console.log("Controles: ← → mover | Espaço atirar | Ctrl+C sair");

  if (inimigos.length === 0) {
    console.log("VITÓRIA! Você derrotou todos os invasores!");
  }

  if (!jogoAtivo && minhaNave.vidasRestantes === 0) {
    console.log("GAME OVER! Suas vidas acabaram!");
  }
}

function atualizarJogo(): void {
  if (!jogoAtivo) {
    return;
  }

  contadorMovimento++;

  if (contadorMovimento >= 5) {
    contadorMovimento = 0;

    let inverterDirecao = false;

    for (const inimigo of inimigos) {
      if (
        inimigo.posicaoX + direcaoInimigos < 0 ||
        inimigo.posicaoX + direcaoInimigos >= LARGURA
      ) {
        inverterDirecao = true;
      }
    }

    if (inverterDirecao) {
      direcaoInimigos *= -1;

      for (const inimigo of inimigos) {
        inimigo.descer();
      }
    } else {
      for (const inimigo of inimigos) {
        inimigo.mover(direcaoInimigos);
      }
    }
  }

  for (const projetil of projeteis) {
    projetil.mover();
  }

  for (let i = projeteis.length - 1; i >= 0; i--) {
    if (projeteis[i].y < 0) {
      projeteis.splice(i, 1);
    }
  }

  for (let i = projeteis.length - 1; i >= 0; i--) {
    for (let j = inimigos.length - 1; j >= 0; j--) {
      if (
        projeteis[i].x === inimigos[j].posicaoX &&
        projeteis[i].y === inimigos[j].posicaoY
      ) {
        inimigos.splice(j, 1);
        projeteis.splice(i, 1);
        pontos += 10;
        break;
      }
    }
  }

  let inimigoAtingiuLinha = false;

  for (const inimigo of inimigos) {
    if (inimigo.posicaoY >= ALTURA - 2) {
      inimigoAtingiuLinha = true;
    }
  }

  if (inimigoAtingiuLinha) {
    minhaNave.receberDano();

    for (const inimigo of inimigos) {
      inimigo.reiniciar();
    }
  }

  if (minhaNave.vidasRestantes === 0) {
    jogoAtivo = false;
  }

  if (inimigos.length === 0) {
    jogoAtivo = false;
  }

  desenharTela();
}

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on("keypress", (str, tecla) => {
  if (!tecla) {
    return;
  }

  if (tecla.ctrl && tecla.name === "c") {
    jogoAtivo = false;
    clearInterval(intervalo);
    process.stdin.setRawMode(false);
    console.log("\nJogo encerrado!");
    process.exit();
  }

  if (!jogoAtivo) {
    return;
  }

  if (tecla.name === "left") {
    minhaNave.moverEsquerda();
  } else if (tecla.name === "right") {
    minhaNave.moverDireita();
  } else if (tecla.name === "space") {
    const tiro = minhaNave.atirar();
    projeteis.push(tiro);
  }
});

const intervalo = setInterval(atualizarJogo, 100);

desenharTela();
