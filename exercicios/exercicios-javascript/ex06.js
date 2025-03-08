let array = [10, 20, 30, 40, 50]

// 1. Adicione um número ao final do array.
array.push(6)
console.log(array)

// 2. Remova o primeiro número do array.
array.shift()
console.log(array)

// 3. Encontre o maior número do array.
let maior = 0
for (let i = 0; i <= array.length; i++) {
    if (array[i] > maior) {
        maior = array[i]
    }
}
console.log(maior)

// 4. Encontre o menor número do array.
let menor = Math.min(...array)
console.log(menor)