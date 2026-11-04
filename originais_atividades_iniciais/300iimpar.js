const prompt = require("prompt-sync")();

for (let i = 0; i <= 300; i++) {
  console.log("Número: " + i);
}
console.log("Os 300 primeiros números!");

for (let im = 1; im <= 599; im = im + 2) {
  console.log("Número: " + im);
}
console.log("Os 300 primeiros impares!");

for (let par = 0; par <= 600; par = par + 2) {
  console.log("Número: " + par);
}
console.log("Os 300 primeiros pares!");
