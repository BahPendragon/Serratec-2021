const ler = require("prompt-sync")();
var numero1= Number(ler("Qual o primeiro número: "));
var operador= ler(" Qual o operador? (-,+,x,/) ");
var numero2 = Number(ler("Qual o segundo número: "));
var soma = operador == "+";
var subtracao = operador == "-";
var multiplicacao = operador == "x";
var divisao = operador == "/"
var resultado;
if (soma){
    resultado = numero1+numero2;
    console.log("Seu resuldado é :", resultado);
} else if(subtracao){
    resultado=numero1-numero2;
    console.log("Seu resuldado é :", resultado );
} else if ( multiplicacao){
    resultado=numero1*numero2;
    console.log("Seu resuldado é :", resultado);
} else if (divisao){
    resultado=numero1/numero2;
    console.log("Seu resuldado é :", resultado);
} else { console.error("Error");
}