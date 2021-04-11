const ler = require("prompt-sync")();
var restaurante= "Restaurante Serratec Self-Sevice";
var tara= 465;
var pesoprato= ler("Qual é peso do refeição em gramas?");
var quilo=ler("Qual é o valor do quilo?")
var precograma=quilo/1000
var calctara= pesoprato+tara;
var resultado= (calctara/ 100 )* precograma;
console.log(restaurante);
console.log("O peso da tara é",tara,"g");
console.log("A cada 100 gramas o valor é de R$", precograma*100);
console.log("O valor consumido foi de", pesoprato,"g");
console.log("Valor Total: R$",Math.trunc(resultado));