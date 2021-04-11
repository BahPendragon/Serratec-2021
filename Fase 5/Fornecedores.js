const ler = require("prompt-sync")();
var pagamento= Number(ler("Valor do pagamento: R$ "));
if (pagamento > 1000 ){
    console.log("Pagamento em cheque.");
} else{
    console.log("Pagamento em dinheiro.");
}