let livro = { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 }

// 1. Desestruture o título e o autor do objeto.
let {titulo, autor} = livro

const retornaValor = (livro) => {
    return console.log(`Nome: ${livro.nome} Autor: ${livro.autor}`)
}
retornaValor(livro)