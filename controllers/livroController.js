const { stringify } = require('node:querystring');
const db = require('../connection/database');

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
            message:erro
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

return res.status(200).json(livros);
  
    } catch(erro){
        return res.status(500).json({
            message:erro
        });
    }
};

//post
const adicionarLivro = async(req,res) => {

const {nome,autor,estoque} = req.body;

if(!nome || typeof nome !== 'string' || nome.trim() === ''){
    return res.status(400).json({message:"Nome Inválido!"});
}

if(!autor || typeof autor !== 'string' || nome.trim() === ''){
    return res.status(400).json({message:"Autor Inválido!"});
}

if(estoque === undefined || isNaN(Number(estoque)) || estoque<0){
    return res.status(400).json({message:"Estoque Inválido!"});
}

try{

    const [livros] = await db.query(
        `
        INSERT INTO livros (nome,autor,estoque) VALUES (?,?,?)
        `,[nome.trim(),autor.trim(),estoque.trim()]
    );

    return res.status(201).json({
       message:"Livro Adicionado Com Sucesso!", 
    });

        } catch(erro) {
            return res.status(500).json({
            message:erro.message
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
        UPDATE FROM livros
        SET ?,?,?
        WHERE id_livro = ?
        `,[nome.trim(),autor.trim(),estoque.trim(),id.trim()]
    );

    return res.status(200).json(livros);
    
} catch(erro){

        return res.status(500).json({message:erro});
    }
}

const deletarLivro = async(req,res) => {

const {id} = req.body;

if(!id || isNaN(Number(id))) return res.status(400).json({message:"ID Inválido"});

try{

    const [livros] = await db.query(
        `
        DELETE FROM livros
        WHERE id_livro = ?
        `,[id]
    );

    return res.status(201).json({
        message:"O livro foi deletado Com Sucesse!",
        id:id}
    );

} catch (erro) {

        return res.status(500).json(console.error(erro));
    }
}

module.exports = {
    acessarLivros,
    acessarLivroId,
    adicionarLivro,
    atualizarLivro,
    deletarLivro
};