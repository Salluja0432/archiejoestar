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

const minhaNave = new Nave();

function desenharTela(): void {
    console.clear();
    console.log("+" + "-".repeat(LARGURA) + "+");

    for (let y = 0; y < ALTURA; y++) {
        let linha = "|";

        for (let x = 0; x < LARGURA; x++) {
            if (y === ALTURA - 2 && x === minhaNave.x) {
                linha += "A";
            } else {
                linha += " ";
            }
        }

        linha += "|";
        console.log(linha);
    }

    console.log("+" + "-".repeat(LARGURA) + "+");
    console.log("Use as setas ESQUERDA e DIREITA");
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
    }
});

desenharTela();
