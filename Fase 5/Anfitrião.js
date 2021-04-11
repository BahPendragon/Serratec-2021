const ler = require("prompt-sync")();
var visitas = Number(ler("Digite a quantidade de visitas: "));
if (visitas <= 0) {
    console.log("Você nunca nos visitou.");
} else if (visitas == 1) {
    console.log("Você já nos visitou uma vez.");
} else if (visitas == 2) {
    console.log("Você já nos visitou duas vezes.");
} else {
    console.log("Você já nos visitou", visitas,"vezes");
}