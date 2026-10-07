const mysql = require('mysql2/promise');

const conexao = mysql.createPool({
    host: 'localhost',
    user: 'biblioteca',
    password: '12345',
    database: 'biblioteca',
    port: 3306
});

module.exports = conexao;