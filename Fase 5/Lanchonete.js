
const ler = require("prompt-sync")();
console.log(":Lanchonete:")
var complemento = Number(ler("Deseja adicionar complemento? 1 - Sim | 2 - Não: "));
if (complemento == 1) {
    console.log("---- Complemento ----");
    var complemento1 = ler("Q=queijo, B=bacon, A=alface, T=tomate, P=picles: ");
    console.log("---- Complemento 2 ----");
    var complemento2 = ler("Q=queijo, B=bacon, A=alface, T=tomate, P=picles: ");
    if (complemento1 == "Q") {
        complemento1 = "Queijo";
    } else if (complemento1 == "B"){
        complemento1 = "Bacon";
    } else if (complemento1 == "A"){
        complemento1 = "Alface";
    } else if (complemento1 == "T") {
        complemento1 = "Tomate";
    } else if (complemento1 == "P"){
        complemento1 = "Picles";
    }
    if (complemento2 == "Q") {
        complemento2 = "Queijo";
    } else if (complemento2 == "B"){
        complemento2 = "Bacon";
    } else if (complemento2 == "A"){
        complemento2 = "Alface";
    } else if (complemento2 == "T") {
        complemento2 = "Tomate";
    } else if (complemento2 == "P"){
        complemento2 = "Picles";
    }
       if (complemento1 == "Alface" || complemento1 == "Tomate"|| complemento1 == "Picles" 
            || complemento2 == "Alface" || complemento2 == "Tomate"|| complemento2 == "Picles"){
        
            var molho = Number(ler("Você deseja molho ? 1 - Sim | 2 - Não: "));

        if (molho == 1) {
            console.log("Lanche com", complemento1,"e", complemento2,",com molho.");
        } else {
            console.log("Lanche com", complemento1,"e", complemento2,",sem molho.");
        }
    } else {
        console.log("Lanche com", complemento1,"e", complemento2+",sem direito a molho.");
    }

} else {
    console.log("Volte Sempre");
}