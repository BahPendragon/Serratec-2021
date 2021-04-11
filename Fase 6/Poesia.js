const ler = require("prompt-sync")()
var novamente = ""

do {
    console.log("Não cobre amor,")
    console.log("que amor não é cobre.")
    console.log("É ouro.")
    console.log("")
    console.log("Não peça amor,")
    console.log("que amor não é peça.")
    console.log("É todo.")
    console.log("")
    console.log("Mas chama, chama amor,")
    console.log("que amor é chama.")
    console.log("É fogo!")
    novamente=ler("Imprimir novamente? ")
} while (novamente == "sim")