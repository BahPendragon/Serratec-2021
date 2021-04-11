
const ler = require("prompt-sync")();
var codigoproduto = Number(ler("Digite o codigo do produto: "));
switch (codigoproduto) {
    case (001):
        console.log("001 Cadeira simples - R$ 100,00")
        break;
    case (002):
        console.log("002 Cadeira luxo - R$ 200,00")
        break;
    case (003):
        console.log("003 Mesa simples - R$ 450,00")
        break;
    case (004):
        console.log("004 Mesa luxo - R$ 900,00")
        break;
    case (005):
        console.log("005 Cama - R$ 1500,00")
        break;
    default:
        console.log("Produto não identificado")
        break;
}