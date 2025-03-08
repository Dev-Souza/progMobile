// 1. Converta a string para maiúsculas.
let transformMaiuscula = "ola mundo"
console.log(transformMaiuscula.toUpperCase())

// 2. Converta a string para minúsculas.
let transformMinusculas = "OLA MUNDO"
console.log(transformMinusculas.toLowerCase())

// 3. Inverta a string.
let reverter = "Olá Mundo!"
console.log(reverter.split('').reverse().join(''))

// 4. Substitua todas as ocorrências de uma letra específica por outra.
let array = ['a','a','b','c','d','e']
for(let i = 0; i <= array.length; i++){
    if(array[i] == 'a'){
        array[i] = 'k'
    }
}
console.log(array)