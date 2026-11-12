import * as readline from "readline";
import { Nave } from "../models/Nave";
import {
  Inimigo,
  InimigoVerde,
  InimigoAmarelo,
  InimigoRoxo,
} from "../models/Inimigo";
import { Projetil } from "../models/Projetil";
import { Personagem } from "../models/Personagem";
import { Direcao } from "../models/tipos";
import { ALTURA, LARGURA } from "../utils/constantes";

export class Jogo {
  private minhaNave: Nave = new Nave();
  private projeteis: Projetil[] = [];

  private inimigos: Inimigo[] = [
    new Inimigo(5, 1),
    new InimigoVerde(15, 1),
    new InimigoAmarelo(25, 1),
    new InimigoRoxo(35, 1),
  ];

  private pontos: number = 0;
  private direcaoInimigos: Direcao = 1;
  private contadorMovimento: number = 0;
  private jogoAtivo: boolean = true;
  private intervalo: NodeJS.Timeout | undefined;

  desenharTela(): void {
    console.clear();

    const personagens: Personagem[] = [this.minhaNave, ...this.inimigos];

    // Percorre o tabuleiro e desenha os personagens e projéteis em suas posições.
    for (let y = 0; y < ALTURA; y++) {
      let linha = "";

      for (let x = 0; x < LARGURA; x++) {
        let caractere = " ";

        for (const personagem of personagens) {
          if (personagem.posicaoX === x && personagem.posicaoY === y) {
            caractere = personagem.desenhar();
          }
        }

        for (const projetil of this.projeteis) {
          if (projetil.x === x && projetil.y === y) {
            caractere = "\x1b[33m|\x1b[0m";
          }
        }

        linha += caractere;
      }

      console.log("|" + linha + "|");
    }

    console.log("Pontuação:", this.pontos);
    console.log("Inimigos restantes:", this.inimigos.length);
    console.log("Vidas:", this.minhaNave.vidasRestantes);
    console.log("Controles: ← → mover | Espaço atirar | Ctrl+C sair");

    if (this.inimigos.length === 0) {
      console.log("VITÓRIA! Você derrotou todos os invasores!");
    }

    if (!this.jogoAtivo && this.minhaNave.vidasRestantes === 0) {
      console.log("GAME OVER! Suas vidas acabaram!");
    }
  }

  private pararJogo(): void {
    // Para as atualizações e devolve o terminal ao modo normal.
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = undefined;
    }

    if (process.stdin.isTTY) {
      process.stdin.setRawMode(false);
    }

    process.stdin.pause();
  }

  atualizarJogo(): void {
    if (!this.jogoAtivo) {
      this.pararJogo();
      return;
    }

    this.contadorMovimento++;

    if (this.contadorMovimento >= 5) {
      this.contadorMovimento = 0;
      let inverterDirecao = false;

      // Verifica se algum inimigo está prestes a alcançar uma das bordas.
      for (const inimigo of this.inimigos) {
        if (
          inimigo.posicaoX + this.direcaoInimigos < 0 ||
          inimigo.posicaoX + this.direcaoInimigos >= LARGURA
        ) {
          inverterDirecao = true;
        }
      }

      // Quando o grupo alcança uma borda, muda de direção e desce uma linha.
      if (inverterDirecao) {
        this.direcaoInimigos = this.direcaoInimigos === 1 ? -1 : 1;

        for (const inimigo of this.inimigos) {
          inimigo.descer();
        }
      } else {
        for (const inimigo of this.inimigos) {
          inimigo.mover(this.direcaoInimigos);
        }
      }
    }

    for (const projetil of this.projeteis) {
      projetil.mover();
    }

    // Remove projéteis que saíram da área visível.
    for (let i = this.projeteis.length - 1; i >= 0; i--) {
      if (this.projeteis[i].y < 0) {
        this.projeteis.splice(i, 1);
      }
    }

    // Procura colisões, remove os objetos atingidos e soma os pontos.
    for (let i = this.projeteis.length - 1; i >= 0; i--) {
      for (let j = this.inimigos.length - 1; j >= 0; j--) {
        if (
          this.projeteis[i].x === this.inimigos[j].posicaoX &&
          this.projeteis[i].y === this.inimigos[j].posicaoY
        ) {
          this.inimigos.splice(j, 1);
          this.projeteis.splice(i, 1);
          this.pontos += 10;
          break;
        }
      }
    }

    let inimigoAtingiuLinha = false;

    // Um inimigo que alcança a linha da nave causa a perda de uma vida.
    for (const inimigo of this.inimigos) {
      if (inimigo.posicaoY >= ALTURA - 2) {
        inimigoAtingiuLinha = true;
      }
    }

    if (inimigoAtingiuLinha) {
      this.minhaNave.receberDano();

      for (const inimigo of this.inimigos) {
        inimigo.reiniciar();
      }
    }

    if (this.minhaNave.vidasRestantes === 0) {
      this.jogoAtivo = false;
    }

    if (this.inimigos.length === 0) {
      this.jogoAtivo = false;
    }

    this.desenharTela();

    if (!this.jogoAtivo) {
      this.pararJogo();
    }
  }

  iniciar(): void {
    readline.emitKeypressEvents(process.stdin);

    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }

    process.stdin.resume();

    process.stdin.on("keypress", (_caractere, tecla) => {
      if (!tecla) return;

      if (tecla.ctrl && tecla.name === "c") {
        this.jogoAtivo = false;
        this.pararJogo();
        console.log("\nJogo encerrado!");
        process.exit(0);
      }

      if (!this.jogoAtivo) return;

      if (tecla.name === "left") {
        this.minhaNave.moverEsquerda();
      } else if (tecla.name === "right") {
        this.minhaNave.moverDireita();
      } else if (tecla.name === "space") {
        const tiro = this.minhaNave.atirar();
        this.projeteis.push(tiro);
      }
    });

    this.intervalo = setInterval(() => {
      this.atualizarJogo();
    }, 100);

    this.desenharTela();
  }
}
