const ler = require("prompt-sync")();
var nome = ler ("Qual seu nome? ");
var empresa= ler("Sr(a) " + nome + ", qual é o nome da empresa que você trabalha?");
var funcao= ler("Qual função você exerce na empresa " + empresa +"?");
var emprestimo= Number(ler("Digite o valor do empréstimo:")) ;
var resultado = (emprestimo * 0.86) + emprestimo;

console.log("Senhor(a)" + nome+ ", você está com sorte!");
console.log("Pela sua função de " +funcao+ " e sua excelente relação com a empresa "+empresa+",");
console.log("foi aprovado um crédito em sua conta corrente de R$"+ resultado);