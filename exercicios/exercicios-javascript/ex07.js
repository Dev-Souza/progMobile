let array = ["Maçã", "Banana", "Abacaxi", "Laranja"]

// 1. Converta todas as strings para maiúsculas.
array.map((fruta) => {
    console.log(fruta.toUpperCase())
})

// 2. Filtre as strings que começam com a letra 'A'.
array.map((fruta) => {
    if(fruta.startsWith('A')){
        console.log(fruta)
    }
})

// 3. Crie um novo array com o comprimento de cada string.
let newArray = []
array.map((fruta) => {
    newArray.push(fruta.length)
})
console.log(newArray)