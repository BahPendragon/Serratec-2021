const ler = require("prompt-sync")();
var nome = ler("Nome do paciente: ");
var menu = parseInt(ler("1 - Já foi vacinado | 2 - Não foi vacinado: "));
var vacinacao = menu == 1;

console.log("Paciente:", nome);

if (vacinacao) {
    console.log("Vacinado? Ok");
    console.log("[Triagem]")
    console.log("Sujeito a infecção?", !vacinacao);
} else {
    console.log("Vacinado ? Não ");
    console.log("[Triagem]")
    console.log("Sujeito a infecção ? ", !vacinacao);
}