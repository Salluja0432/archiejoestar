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
        if (this.x < 39) {
            this.x++;
        }
    }
}

const minhaNave = new Nave();

console.log("Posição inicial:", minhaNave.x);

minhaNave.moverDireita();

console.log("Após mover para direita:", minhaNave.x);

minhaNave.moverEsquerda();

console.log("Após mover para esquerda:", minhaNave.x);
