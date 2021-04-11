const ler = require("prompt-sync")();
var lado1 = Number(ler("Digite o valor do PRIMEIRO lado: "));
var lado2 = Number(ler("Digite o valor do SEGUNDO lado: "));
var lado3 = Number(ler("Digite o valor do TERCEIRO lado: "));
if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    if ( lado1 == lado2 && lado2 == lado3) {
        console.log("Triângulo Equilátero");      
    } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        console.log("Triângulo Escaleno!"); 
    } else {
        console.log("Triângulo Isósceles");
    }
} else {
    console.log("Não é um triangulo"); 
}