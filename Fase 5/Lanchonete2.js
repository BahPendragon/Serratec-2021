const ler = require("prompt-sync")();
console.log(":Lanchonete:")
console.log("---- Complemento ----");
var complemento1 = ler("Q=Queijo, B=Bacon, A=Alface, T=Tomate, P=Picles, C=Cebola, O=Ovo frito: ");
var escolha1;
var escolha2;

switch (complemento1) {
    case ("Q"):
        escolha1 = "Queijo"
        break;
    case ("B"):
        escolha1 = "Bacon"
        break;
    case ("A"):
        escolha1 = "Alface"
        break;
    case ("T"):
        escolha1 = "Tomate"
        break;
    case ("P"):
        escolha1 = "Picles"
        break;
    case ("C"):
        escolha1 = "Cebola"
        break;
    case ("O"):
        escolha1 = "Ovo Frito"
        break;
}
console.log("---- Complemento ----");
var complemento2 = ler("Q=Queijo, B=Bacon, A=Alface, T=Tomate, P=Picles, C=Cebola, O=Ovo frito: ");

switch (complemento2) {
    case ("Q"):
        escolha2 = "Queijo"
        break;
    case ("B"):
        escolha2 = "Bacon"
        break;
    case ("A"):
        escolha2 = "Alface"
        break;
    case ("T"):
        escolha2 = "Tomate"
        break;
    case ("P"):
        escolha2 = "Picles"
        break;
    case ("C"):
        escolha2 = "Cebola"
        break;
    case ("O"):
        escolha2 = "Ovo Frito"
        break;
}

if (complemento1 == "A" || complemento1 == "T" || complemento1 == "P"
    || complemento2 == "A" || complemento2 == "T" || complemento2 == "P") {
    var molho = Number(ler("Você deseja molho ?  1 - Sim | 2 - Não: "));
    switch (molho) {
        case (1):
            console.log("Lanche com", escolha1, "e", escolha2, ",com molho.");
            break;
        case (2):
            console.log("Lanche com", escolha1, "e", escolha2, ",sem molho.");
            break;
    }
} else {
    console.log("Lanche com", escolha1, "e", escolha2, ",sem direito a molho.");
}