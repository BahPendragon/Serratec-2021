const ler = require("prompt-sync")();
var valor = Number(ler("Digite um valor: "));
var soma = 0;

for (let i=valor; i>=1;i--) {
    soma = soma + i;
    console.log("-",i);
}
console.log("A soma de todos os valores:", soma);