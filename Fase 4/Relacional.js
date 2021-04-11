const ler=require("prompt-sync")()
var A=ler("Digite o primeiro valor inteiro:")
var B=ler("Digite o segundo valor inteiro:")
var igual = A == B;
var diferente = A != B;
var maior = A > B;
var maiorigual = A>=B;
var menor = A < B;
var menorigual= A<=B;

console.log(A,"é igual a",B,"?",igual);
console.log(A,"é diferente de",B,"?",diferente);
console.log(A,"é maior que",B,"?",maior);
console.log(A,"é maior ou igual a",B,"?",maiorigual);
console.log(A,"é menor que",B,"?",menor);
console.log(A,"é menor ou igual",B,"?",menorigual);