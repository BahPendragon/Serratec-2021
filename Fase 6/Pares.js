const ler = require("prompt-sync")();

var limite = 3;
var controle = 2;
var novamente = "";

do {

    for (controle; controle < limite; controle = controle + 10) {
        console.log( controle+",",(controle+2)+",",(controle+4)+"," ,(controle+6)+"," ,(controle+8)+".");
    }

    limite = limite + 10;
    novamente = ler("Deseja continuar? ");

} while (novamente == "sim");