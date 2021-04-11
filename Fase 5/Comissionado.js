const ler = require("prompt-sync")();
var vendas= Number(ler("Valor total de vendas:"));
const meta=5000.00;
var cpv = vendas * 0.05;
var add=0.0;

if (vendas > meta){
    add = (vendas - meta) * 0.09;
}
console.log ("Sua comisão:",cpv);
console.log ("Valor adicional:",add);