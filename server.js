const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // define a porta que o servidor vai rodar (primeiro tenta pegar do .env, se não tiver, usa 3000 como padrão)
const path = require('path');

//importa o arquivo de rotas do Usuário
const usuarioRoutes = require('./routes/usuarioRoutes');
const imovelRoutes = require('./routes/imovelRoutes');

//Configurações:
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', usuarioRoutes);
app.use('/', imovelRoutes);

//Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} na arquitetura MVC`);
});
