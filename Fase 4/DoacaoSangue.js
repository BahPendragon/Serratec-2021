const ler = require("prompt-sync")();
console.log("---- BANCO DE SANGUE ----");
console.log("Digite 'sim' ou 'não' nas restrições a seguir");
var idade= ler("Você está abaixo de 16 ou acima de 69 anos? ");
var peso=ler("Pesa menos de 50kg? ");
var hepatite= ler("Você tem Hepatite? ");
var malaria=ler("Já teve Malária? ");
var recente=ler("Fez doação recentemente? ");
var resultado = !(
idade == "sim" ||
peso == "sim" ||
hepatite == "sim" ||
malaria == "sim" ||
recente == "sim"
);


console.log("==RESULTADO DA TRIAGEM==");
console.log("Pode doar sangue?", resultado);
