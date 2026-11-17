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

if(!nome || !autor || isNaN(Number(estoque)) || estoque === undefined){
    return res.status(400).json({
        message:"Nome, autor ou estoque inválido!"
    });
}

try{

    const [livros] = await db.query(
        `
        INSERT INTO livros (nome,autor,estoque) VALUES (?,?,?)
        `,[nome,autor,estoque]
    );
        } catch(erro) {
            return res.status(500).json({
            message:erro.message
        });
    }
}

module.exports = {
    acessarLivros,
    acessarLivroId,
    adicionarLivro
};