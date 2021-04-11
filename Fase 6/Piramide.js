const ler = require("prompt-sync")();
var partedapiramide = "D";
var piramide = Number(ler("Qual é a altura da pirâmide? "))
for (let i = 0; i<piramide; i++) {
   console.log(partedapiramide);
   partedapiramide=partedapiramide+"D";
}