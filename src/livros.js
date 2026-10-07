const conexao = require('../connection/database');



async function cadastrarLivro(nome,autor,ano,estoque) {
    
    const sql = `
    
    INSERT INTO livros (nome,autor,ano,estoque)
    VALUES (?,?,?,?)

    `;

    const [resultado] = await conexao.execute(
        sql,
        [nome,autor,ano,estoque]
    );

    return [resultado];
}

async function listarLivros() {

    const sql = `
    
    SELECT * FROM livros
    
    `;

    const [livros] = await conexao.execute(sql);

    return livros;
}

async function buscarLivro(id) {

    const sql = `
    
    SELECT * FROM livros where ID = ?

    `;

    const [livros] = await conexao.execute(sql,
        [id]
    );

    return livros;

}

async function atualizarLivro(id, nome, autor,ano,estoque) {
    
    const sql = `
    
        UPDATE livros SET
        nome = ?,
        autor = ?,
        ano = ?,
        estoque = ?

        WHERE id = ?
    
    `;

    const [resultado] = await conexao.execute(
        sql,
        [nome,autor,ano,estoque,id]
    );

    return resultado;
}

async function excluirLivro(id) {
    
    const sql = `

    DELETE FROM livros
    
    WHERE id = ?
    
    `;

    const [resultado] = await conexao.execute(
        sql,
        [id]    

    );

    return [resultado];

}


module.exports = {

    cadastrarLivro,
    listarLivros,
    buscarLivro,
    atualizarLivro,
    excluirLivro
};