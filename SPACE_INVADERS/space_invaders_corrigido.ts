import * as readline from "readline";

const ALTURA: number = 12;
const LARGURA: number = 40;

class Nave {
  x: number;

  constructor() {
    this.x = 20;
  }

  moverEsquerda(): void {
    if (this.x > 0) {
      this.x--;
    }
  }

  moverDireita(): void {
    if (this.x < LARGURA - 1) {
      this.x++;
    }
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

class Inimigo {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  mover(direcao: number): void {
    this.x += direcao;
  }

  descer(): void {
    this.y++;
  }
}

const minhaNave = new Nave();
const projeteis: Projetil[] = [];
const inimigos: Inimigo[] = [
  new Inimigo(10, 2),
  new Inimigo(20, 2),
  new Inimigo(30, 2),
];

let pontos: number = 0;
let direcaoInimigos: number = 1;
let contadorMovimento: number = 0;
let jogoAtivo: boolean = true;

function desenharTela(): void {
  console.clear();
  console.log("+" + "-".repeat(LARGURA) + "+");

  for (let y = 0; y < ALTURA; y++) {
    let linha = "|";

    for (let x = 0; x < LARGURA; x++) {
      let simbolo = " ";

      if (y === ALTURA - 2 && x === minhaNave.x) {
        simbolo = "A";
      }

      for (let i = 0; i < inimigos.length; i++) {
        const inimigo = inimigos[i];
        if (inimigo && inimigo.x === x && inimigo.y === y) {
          simbolo = "V";
        }
      }

      for (let i = 0; i < projeteis.length; i++) {
        const projetil = projeteis[i];
        if (projetil && projetil.x === x && projetil.y === y) {
          simbolo = "|";
        }
      }

      linha += simbolo;
    }

    linha += "|";
    console.log(linha);
  }

  console.log("+" + "-".repeat(LARGURA) + "+");
  console.log("Pontuação:", pontos);
  console.log("Inimigos restantes:", inimigos.length);
  console.log("Setas: movimentar | ESPAÇO: atirar");
  console.log("Ctrl + C: sair");

  if (inimigos.length === 0) {
    console.log("VITÓRIA! Todos os invasores foram destruídos!");
  } else if (!jogoAtivo) {
    console.log("GAME OVER! Os invasores chegaram à sua nave!");
  }
}

readline.emitKeypressEvents(process.stdin);

if (!process.stdin.isTTY) {
  console.log("Execute o jogo em um terminal interativo.");
  process.exit(1);
}

process.stdin.setRawMode(true);
process.stdin.resume();

const intervalo = setInterval(() => {
  if (!jogoAtivo) {
    desenharTela();
    clearInterval(intervalo);
    return;
  }

  contadorMovimento++;

  if (contadorMovimento >= 5) {
    contadorMovimento = 0;

    let vaiDescer = false;

    for (let i = 0; i < inimigos.length; i++) {
      const inimigo = inimigos[i];
      if (!inimigo) continue;

      const proximoX = inimigo.x + direcaoInimigos;
      if (proximoX >= LARGURA || proximoX < 0) {
        vaiDescer = true;
        break;
      }
    }

    if (vaiDescer) {
      direcaoInimigos *= -1;

      for (let i = 0; i < inimigos.length; i++) {
        const inimigo = inimigos[i];
        if (!inimigo) continue;

        inimigo.descer();

        if (inimigo.y >= ALTURA - 2) {
          jogoAtivo = false;
        }
      }
    } else {
      for (let i = 0; i < inimigos.length; i++) {
        const inimigo = inimigos[i];
        if (!inimigo) continue;
        inimigo.mover(direcaoInimigos);
      }
    }
  }

  for (let i = projeteis.length - 1; i >= 0; i--) {
    const projetil = projeteis[i];
    if (!projetil) continue;

    projetil.mover();

    if (projetil.y < 0) {
      projeteis.splice(i, 1);
      continue;
    }

    for (let j = inimigos.length - 1; j >= 0; j--) {
      const inimigo = inimigos[j];
      if (!inimigo) continue;

      if (projetil.x === inimigo.x && projetil.y === inimigo.y) {
        inimigos.splice(j, 1);
        projeteis.splice(i, 1);
        pontos += 10;
        break;
      }
    }
  }

  if (inimigos.length === 0) {
    jogoAtivo = false;
  }

  desenharTela();

  if (!jogoAtivo) {
    clearInterval(intervalo);
  }
}, 100);

process.stdin.on("keypress", (_tecla: string, tecla: readline.Key) => {
  if (tecla.ctrl && tecla.name === "c") {
    clearInterval(intervalo);
    process.stdin.setRawMode(false);
    process.stdin.pause();
    console.clear();
    console.log("Jogo encerrado!");
    process.exit(0);
  }

  if (!jogoAtivo) {
    return;
  }

  if (tecla.name === "left") {
    minhaNave.moverEsquerda();
  } else if (tecla.name === "right") {
    minhaNave.moverDireita();
  } else if (tecla.name === "space") {
    const tiro = new Projetil(minhaNave.x, ALTURA - 3);
    projeteis.push(tiro);
  }
});

desenharTela();
