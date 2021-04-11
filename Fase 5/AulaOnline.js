const ler = require("prompt-sync")();
var prova1 =Number(ler("Digite a nota da primeira prova: "));
var prova2 =Number(ler("Digite a nota da segunda prova: "));
var resultado = (prova1 + prova2)/2;
if  (resultado >= 0 && resultado < 4) {
    console.log("Reprovado :/\n","Total",resultado);
} else if (resultado >= 4 && resultado < 6) {
    console.log("Recuperação :v\n","Total",resultado);
} else if (resultado >= 6 && resultado < 8) {
    console.log("Aprovado :)\n","Total",resultado);
} else if (resultado >= 8 && resultado <= 10) {
    console.log("Destaque :D\n","Total",resultado);
} else {
    console.log("Erro, verifique sua nota e tente novamente !!")
}