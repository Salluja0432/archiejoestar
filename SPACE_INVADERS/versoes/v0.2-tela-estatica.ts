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
    let borda = "+";

    for (let x = 0; x < LARGURA; x++) {
        borda += "-";
    }

    borda += "+";
    console.log(borda);

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

    console.log(borda);
}

desenharTela();
