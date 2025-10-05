const express = require('express');
const app = express();
const path = require('path');

//importa o arquivo de rotas do Usuário
const usuarioRoutes = require('./routes/usuarioRoutes');

//Configurações:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', usuarioRoutes);


//Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
