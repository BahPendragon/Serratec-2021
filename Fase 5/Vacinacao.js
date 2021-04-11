const ler = require("prompt-sync")();
var nome = ler("Digite o nome do paciente ?")
console.log("====== BEM VINDO", nome, "=====");
var idade = ler("Digite a idade do paciente: ");
if (idade > 67) {
    console.log("Por quê não vacinou ainda", nome, "?");
} else if (idade < 67) {
    console.log("Volte na próxima semana", nome);
} else {
    console.log("Vacinação hoje.", nome);
}