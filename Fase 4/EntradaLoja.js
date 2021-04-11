const ler = require("prompt-sync")();
const limite = 35;
var quant = ler("Digite a quantidade de pessoas na loja: ");
var autorizacao = quant <= limite;

console.log("Autorizado a entrada ?", autorizacao);