const ler = require("prompt-sync")();

var valor = ler("Tabuada de qual número deseja exibir? ");

for (let i= 0; i <= 10; i++) {
    var resultado = valor * i;
    console.log(valor, "x", i, "=", resultado);    
}