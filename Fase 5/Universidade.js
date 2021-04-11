const ler = require("prompt-sync")();
var dia = Number(ler("Digite o dia atual: "));
var nroboleto = ler("Numero do boleto: ");
var diapag = Number(ler("Dia do pagamento: "));
var desconto = diapag >= 10 && diapag <= 13;

console.log("-----------------")
console.log("Dia de Hoje:",dia)
console.log("Numero do boleto:",nroboleto)
console.log("Dia do pagamento:",diapag)

if (desconto) {
    console.log("Desconto na próxima mensalidade do boleto", nroboleto+":", desconto);
} else {
    console.log("Desconto na próxima mensalidade do boleto", nroboleto+":", desconto);
}