const ler = require("prompt-sync")()
var mesnasc =ler("Mês do seu nascimento:")
var dianasc = ler("Dia do aniversário:")
var validacao1= mesnasc==1 && dianasc>=21
var validacao2 = mesnasc==2 && dianasc<=19
var validacaotot = validacao1 || validacao2;

console.log("Você é inteligente?", validacaotot, "!");