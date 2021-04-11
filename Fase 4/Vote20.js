const ler = require("prompt-sync")();

var idade = ler("Digite sua idade ?");
var votar = idade >= 16;

console.log("------ Eleições 2021 ------");
console.log("Sua idade:", idade);
console.log("Você já pode votar? ", votar);