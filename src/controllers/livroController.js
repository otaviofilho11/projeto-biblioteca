const { type } = require('node:os');
const db = require('../connection/config/database');

//get
const acessarLivros = async(req,res) => {

try {
    const [livros] = await db.query(
        `
        SELECT * FROM livros;
        `
    )

return res.status(200).json(livros);

}  catch (erro){
     return res.status(500).json({
            message:"Erro Ao Acessar Os Livros"
        });
    }
};

const acessarLivroId = async(req,res) => {
    const {id} = req.params;

try{
    const [livros] = await db.query(
        `
        SELECT * FROM livros
        WHERE id_livro = ?
        `,[id]
    )

if(livros.length === 0){
    return res.status(404).json({message:"Livro Não Encontrado"});
}

return res.status(200).json(livros);
  
    } catch(erro){
        return res.status(500).json({
            message:"Erro Ao Buscar O Livro"
        });
    }
};

const acessarLivroAutor = async(req,res) => {

const {autor} = req.body;

if(!autor || typeof autor !== "string" || autor.trim() === ''){
    return res.status(400).json({message:"Autor Não Encontrado!"});
}

try{
        const [livros] = await db.query(
        `
        SELECT * FROM livros
        WHERE autor = ?
        `,[autor]
        );

        if(livros.length === 0) {
            return res.status(404).json({message:"Erro Ao Buscar Livro"});
        }

        return res.status(200).json(livros);

} catch(erro){
        return res.status(500).json({message:"Erro Ao Buscar Livro"});
    }
};

const acessarLivroNome = async(req,res) => {

const {nome} = req.query;

if(!nome || typeof nome !== 'string' || nome.trim() == ''){
    return res.status(400).json({message:"Erro ao buscar o livro!"});
}

try{

const [livros] = await db.query(
    `
    SELECT * FROM livros
    WHERE nome = ?
    `,[nome]
    );

    if(livros.length === 0){
        return res.status(404).json({message:"Livro Não Encontrado!"});
    }

    return res.status(200).json(livros);
    
} catch {
    return res.status(500).json({message:"Erro Ao buscar Livro"});
    }
}

//post
const adicionarLivro = async(req,res) => {

const {nome,autor,estoque} = req.body;

if(!nome || typeof nome !== 'string' || nome.trim() === ''){
    return res.status(400).json({message:"Nome Inválido!"});
}

if(!autor || typeof autor !== 'string' || autor.trim() === ''){
    return res.status(400).json({message:"Autor Inválido!"});
}

if(estoque === undefined 
  || isNaN(Number(estoque)) 
  || estoque<0
  || !Number.isInteger(estoque)
) {
    return res.status(400).json({message:"Estoque Inválido!"});
}

try{

    const [livros] = await db.query(
        `
        INSERT INTO livros (nome,autor,estoque) VALUES (?,?,?)
        `,[nome.trim(),autor.trim(),estoque]
    );

    return res.status(201).json({
       message:"Livro Adicionado Com Sucesso!", 
    });

        } catch(erro) {
            return res.status(500).json({
            message:"Erro Ao Adicionar Livro"
        });
    }
}

const atualizarLivro = async(req,res) => {

const {nome,autor,estoque} = req.body;
const {id} = req.params;

if(!id || isNaN(Number(id))) return res.status(400).json({message:"ID Inválido"});

if(!nome || typeof nome !== 'string' || nome.trim() === '') return res.status(400).json({message:"Nome Inválido"});

if(!autor || typeof autor !== 'string' || autor.trim() === '') return res.status(400).json({message:"Autor Inválido"});

if(!estoque || isNaN(Number(estoque)) || estoque<0) return res.status(400).json({message:"Estoque Inválido"});

try{

    const [livros] = await db.query(
        `
        UPDATE livros
        SET ?,?,?
        WHERE id_livro = ?
        `,[nome.trim(),autor.trim(),estoque.trim(),id]
    );

    return res.status(200).json(livros);
    
} catch(erro){

        return res.status(500).json({message:"Erro Ao Atualizar o Livro"});
    }
}

const deletarLivro = async(req,res) => {

const {id} = req.params;

if(!id || isNaN(Number(id))) return res.status(400).json({message:"ID Inválido"});

try{

    const [livros] = await db.query(
        `
        DELETE FROM livros
        WHERE id_livro = ?
        `,[id]
    );

    if(livros.affectedRows === 0){
        return res.status(404).json({message:"Livro Não Encontrado!"});
    }

    return res.status(200).json({
        message:"O livro foi deletado Com Sucesse!",
        id:id}
    );

} catch (erro) {

        return res.status(500).json({message:"Erro Ao Deletar O livro!"});
    }
}

module.exports = {
    acessarLivros,
    acessarLivroId,
    acessarLivroAutor,
    acessarLivroNome,
    adicionarLivro,
    atualizarLivro,
    deletarLivro
};