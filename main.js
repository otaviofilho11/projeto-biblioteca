const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

//rotas
const livroRoutes = require('./routes/livroRoutes');
app.use(livroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Rodando -> http://localhost:${PORT}`);
});