const ler = require("prompt-sync")();
var tempo = Number(ler("Digite a previsão do tempo para esse fim de semana: 1 - Sol | 2 - Chuva: " ));
console.log("--ROTINA DO BRAYA--")
if (tempo == 1) {
    console.log("Ir para praia");
    console.log("Levar um lanche para almoçar na praia");
} else {
    console.log("Ir estudar");
    console.log("Comer feijoada em casa");
    console.log("Assistir TV");
    console.log("Tira um cochilo");
}