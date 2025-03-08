// Some os dois números.
const soma = (a,b) => {
    return a + b
}
console.log(soma(15,5))

// 2. Subtraia o segundo número do primeiro.
const subtracao = (a,b) => {
    return b - a
}
console.log(subtracao(15,5))

// 3. Multiplique os dois números.
const multiplicacao = (a,b) => {
    return a * b
}
console.log(multiplicacao(15,5))

// 4. Divida o primeiro número pelo segundo.
const divisao = (a,b) => {
    return a / b
}
console.log(divisao(15,5))

// Verifique se o primeiro número é maior que o segundo.
const maior = (a,b) => {
    if(a > b){
        return console.log("O primeiro é maior que o segundo")
    }
    return console.log("O primeiro não é maior que o segundo")
}
maior(15,5)