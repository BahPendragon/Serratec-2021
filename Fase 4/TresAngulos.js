const ler = require("prompt-sync")();
var ang1 = ler("Digite o primeiro lado: ");
var ang2 = ler("Digite o segundo lado: ");
var ang3 = ler("Digite o terceiro lado: ");
var validacao = ang1 <= ang2+ang3 || ang2 <= ang1+ang3 || ang3 <= ang1+ang2;

console.log("Essas medidas tornam esse triângulo é válido?", validacao);