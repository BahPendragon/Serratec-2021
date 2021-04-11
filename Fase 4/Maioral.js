const ler = require("prompt-sync")();
var player1 = ler("Player 1 digite um numero: ");
var player2 = ler("Player 2 digite um numero: ");
var resultplayer1 = player1 > player2;
var resultplayer2 = player2 > player1;
var empate = player1 == player2;

console.log("== Maioral ==");
console.log("Player 1:", player1);
console.log("Player 2:", player2);
console.log(": Resultados :");
console.log("Player 1 venceu ?", resultplayer1);
console.log("Player 2 venceu ?", resultplayer2);
console.log("Houve empate ? ", empate);