const ler = require("prompt-sync")();
var sexo = ler("Qual o seu sexo (Masculino/Feminino)? ");
var anonascimento = ler("Qual o seu ano de nascimento? ");
const ano = 2021;
var idade = ano - anonascimento ;
var emancipado = idade >= 21 && sexo === "Feminino" || idade >= 18 && sexo === "Masculino";

console.log("Sexo:",sexo);
console.log("Ano de nascimento:", anonascimento);
console.log("Cidadão Emancipado ?", emancipado);