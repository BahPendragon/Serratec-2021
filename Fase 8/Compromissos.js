
const ler = require("prompt-sync")();
var dia = [];
do{
var leitura=Number(ler("Dia do mês do compromisso: "));
var conferir= "";
    for (let i=0;i<dia.length;i++) {
        if (dia[i] == leitura){
            conferir = true;
        } 
    }
    if (conferir == true){
        var condicao = ler("Já há compromisso nesse dia, deseja agendar outro compromisso? (s/n): ")
    }else{
        dia.push(leitura);
        let compromisso= ler("Qual é compromisso do dia " + leitura +"? ");
        console.log("Compromisso "+"'" + compromisso +"'"+ " agendado.");
        condicao =  ler("Deseja agendar outro compromisso? ")
    }

} while(condicao.toLowerCase() == "sim"|| condicao.toLowerCase() == "s")


    