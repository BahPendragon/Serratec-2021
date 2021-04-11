const ler = require("prompt-sync")();
var codigoproduto = Number(ler("Digite o codigo do produto: "));
var valorproduto = 0;
var nomeproduto = "";
var desconto = "";
switch (codigoproduto) {
    case (001):
        valorproduto = 100,00;
        nomeproduto = "Cadeira simples";
        console.log("Nome do produto --->", nomeproduto);
        console.log("Valor = R$", valorproduto);
        break;
    case (002):
        valorproduto = 200,00;
        nomeproduto = "Cadeira de luxo";
        console.log("Nome do produto --->", nomeproduto);
        console.log("Valor = R$", valorproduto);
        break;
    case (003):
        valorproduto = 450,00;
        nomeproduto = "Mesa simples";
        console.log("Nome do produto --->", nomeproduto);
        console.log("Valor = R$", valorproduto);
        break;
    case (004):
        valorproduto = 900,00;
        nomeproduto = "Mesa luxo";
        console.log("Nome do produto --->", nomeproduto);
        console.log("Valor = R$", valorproduto);
        break;
    case (005):
        valorproduto = 1500,00;
        nomeproduto = "Cama";
        console.log("Nome do produto --->", nomeproduto);
        console.log("Valor = R$", valorproduto);
        break;
    default:
        console.log("Produto não encontrado !")
        break;
}
if (valorproduto>0) {
    desconto = Number(ler("Exibir preço com desconto? 1 - Sim | 2 - Nao: "));
    switch (desconto) {
        case (1):
            var descontoTotal = valorproduto * 0.95;
            console.log("Valor do produto", nomeproduto, "com desconto: R$", descontoTotal);
            break;
        case (2):
            console.log("Valor do produto", nomeproduto, "Total da venda: R$", valorproduto);
            break;
        default:
            console.log("Opção inválida !")
            break;
    }
}