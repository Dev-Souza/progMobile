let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. Filtre os números pares.
const nPares = (numbers) => {
    let novosNs = []
    for(let i =0; i <= numbers.length; i++){
        if(numbers[i] % 2 == 0){
            novosNs.push(numbers[i])
        }
    }
    return novosNs
}
console.log(nPares(numbers))

// 2. Multiplique cada número por 2.
numbers.map((n) => {
    console.log(n * 2)
})

// Calcule a soma de todos os números obtidos.
let soma = 0
numbers.map((n) => {
    soma += n
})
console.log(soma)