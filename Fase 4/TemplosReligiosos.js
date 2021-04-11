const ler = require("prompt-sync")();
var mascara = ler("Está usando máscara?");
var temperatura = ler("Qual a temperatura? ");
var autorizacao=mascara==="Sim"&&temperatura<=37.5;

console.log("Usa máscara:",mascara);
console.log("Temperatura:",temperatura + "º");
console.log("Autorizado a entrada? ",autorizacao)