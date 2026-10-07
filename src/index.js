const {

    cadastrarLivro,
    listarLivros,
    buscarLivro,
    atualizarLivro,
    excluirLivro

} = require('./livros');

async function main() {

    const livros = await listarLivros();

    console.log(livros);
    
}

main();