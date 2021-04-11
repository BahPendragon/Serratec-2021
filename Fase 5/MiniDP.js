const ler = require("prompt-sync")();
var nome = ler("Digite o nome do funcionário: ")
var valorporhora = Number(ler("Digite o valor por hora:"));
var quanthorastrab = Number(ler("Quantas horas trabalhou no mês? "));
var salariobase = valorporhora * quanthorastrab;
var horaextra = 0
var inss = 0
var mensagem;
var salariohoraextra = horaextra + salariobase;
if (quanthorastrab > 160) {
    let valorDaHoraExtra = valorporhora * 0.5
    horaextra = (quanthorastrab - 160) * valorDaHoraExtra;
    if (salariohoraextra <= 1100) {
        inss = salariohoraextra * 0.075;
        mensagem = "Com base no salario sará descontado 7,5% do INSS: ";
    } else if ((salariohoraextra >= 1100.01) && (salariohoraextra <= 2203.45)) {
        inss = salariohoraextra * 0.09;
        mensagem = "Com base no salario sará descontado 9% do INSS:";
    } else if ((salariohoraextra >= 2203.49) && (salariohoraextra <= 3305.22)) {
        inss = salariohoraextra * 0.12;
        mensagem = "Com base no salario sará descontado 12% do INSS:"
    } else if ((salariohoraextra >= 3305.23) && (salariohoraextra <= 6433.57)) {
        inss = salariohoraextra * 0.14;
        mensagem = "Com base no salario sará descontado 14% do INSS:"
    }
    var salarioliquido = (salariobase + horaextra) - inss;
    console.log("----- Contracheque do funcionário ",nome,"-----");
    console.log("Salário base R$: ",salariobase);
    console.log("Valor de horas extras",horaextra);
    console.log(mensagem);
    console.log("Valor do desconto para o INSS: R$",inss);
    console.log("Salário líquido: R$",salarioliquido);
}
else {
    if (salariobase <= 1100) {
        inss = salariobase * 0.075;
        mensagem = "Com base no salario sará descontado 7,5% do INSS: ";
    } else if ((salariobase >= 1100.01) && (salariobase <= 2203.45)) {
        inss = salariobase * 0.09;
        mensagem = "Com base no salario sará descontado 9% do INSS:";
    } else if ((salariobase >= 2203.49) && (salariobase <= 3305.22)) {
        inss = salariobase * 0.12;
        mensagem = "Com base no salario sará descontado 12% do INSS:"
    } else if ((salariobase >= 3305.23) && (salariobase <= 6433.57)) {
        inss = salariobase * 0.14;
        mensagem = "Com base no salario sará descontado 14% do INSS:"
    }
    var salarioliquido = (salariobase + horaextra) - inss;
    console.log("----- Contracheque do funcionário",nome,"-----");
    console.log("Salário base R$: ",salariobase);
    console.log(mensagem);
    console.log("Valor do desconto para o INSS: R$",inss);
    console.log("Salário líquido: R$",salarioliquido)
}