const db = require('../connection/config/database');

//get
const visualizarUsuarios = async(req,res) => {

try{

const [usuarios] = await db.query(
    `
    SELECT * FROM usuarios
    `
);

return res.status(200).json(usuarios);

} catch(erro) {
        res.status(500).json({message:"Erro Na Consulta"});
        console.error(`ERro na consulta:${erro}`);    
    }
}

