import * as readline from "readline";

const ALTURA: number = 12;
const LARGURA: number = 40;

class Nave {
    x: number;

    constructor() {
        this.x = 20;
    }

    moverEsquerda(): void {
        if (this.x > 0) this.x--;
    }

    moverDireita(): void {
        if (this.x < LARGURA - 1) this.x++;
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

const minhaNave = new Nave();
const projeteis: Projetil[] = [];

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

            for (let i = 0; i < projeteis.length; i++) {
                if (projeteis[i].x === x && projeteis[i].y === y) {
                    simbolo = "|";
                }
            }

            linha += simbolo;
        }

        linha += "|";
        console.log(linha);
    }

    console.log("+" + "-".repeat(LARGURA) + "+");
    console.log("Use as setas para movimentar | ESPAÇO para atirar");
    console.log("Ctrl + C para sair");
}

readline.emitKeypressEvents(process.stdin);

if (!process.stdin.isTTY) {
    console.log("Execute o jogo em um terminal interativo.");
    process.exit(1);
}

process.stdin.setRawMode(true);
process.stdin.resume();

const intervalo = setInterval(() => {
    for (let i = projeteis.length - 1; i >= 0; i--) {
        projeteis[i].mover();

        if (projeteis[i].y < 0) {
            projeteis.splice(i, 1);
        }
    }

    desenharTela();
}, 100);

process.stdin.on("keypress", (_tecla, tecla) => {
    if (tecla.ctrl && tecla.name === "c") {
        clearInterval(intervalo);
        process.stdin.setRawMode(false);
        process.stdin.pause();
        console.clear();
        console.log("Jogo encerrado!");
        process.exit(0);
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
