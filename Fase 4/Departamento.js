const ler = require("prompt-sync")();
var horastrab = Number(ler("Digite as horas trabalhada: ")) ;
var valorht = Number(ler("Digite o valor por hora: ")) ;
var inss = Number(ler("Digite o percentual do inss: ")) 
var salariobruto = valorht * horastrab;
var descInss = (salariobruto * inss) / 100;
var salarioliquido = salariobruto - descInss;

console.log("Salário bruto: R$",salariobruto);
console.log("Valor do desconto inss: R$",descInss);
console.log("Salário liquido: R$",salarioliquido);