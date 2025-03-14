import { calcularIMC, TabelaIMC } from "./CalculadoraIMC.js"
console.log("Calculo do IMC")

console.table(TabelaIMC)
const result = calcularIMC(75, 1.80)
if(result >= 18.5 && result < 24.9){
    console.log(TabelaIMC[0].classificacao)
}else if(result >= 24.9 && result < 29.9){
    console.log(TabelaIMC[1].classificacao)
}else if(result >= 29.9 && result < 34.9){
    console.log(TabelaIMC[2].classificacao)
}else if(result >= 34.9 && result < 39.9){
    console.log(TabelaIMC[3].classificacao)
}else if(result >= 39.9 && result < 44.9){
    console.log(TabelaIMC[4].classificacao)
}else if(result >= 44.9){
    console.log(TabelaIMC[5].classificacao)
}else{
    console.log("Aconteceu algum erro!");
}

//Importando o pacote moment
import moment from 'moment';

const hoje = moment().locale('pt-br')
console.log(hoje.format('DD/MM/yyyy'))