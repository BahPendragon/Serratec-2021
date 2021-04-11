const ler = require("prompt-sync")();
var cartas = 0;
do {
    var valor = Number(ler("Digite o valor da carta: "));
    cartas = cartas + valor;
} while (cartas < 21);

if (cartas > 21){
    console.log("O carteiro venceu, o valor utrapassou e alcançou:", cartas,"cartas");
} else {
    console.log("Parabéns você venceu. Total", cartas,"cartas")
}