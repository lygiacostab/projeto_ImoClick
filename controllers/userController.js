const Usuario = require('../models/Usuario'); //importa o model do Usuário
const usuarios = [];

//Renderizações páginas simples:
function renderHome(req, res){
    res.render('index', { title: 'Home - ImoClick', usuario: null});
};
function renderLogin(req, res){
    res.render('login', { title: 'Login', usuario: null});
};
function renderCadastroUser(req, res){
    res.render('cadastroUser', { title: 'cadastroUser', usuario: null});
};
function renderIdentificacao(req, res){
    res.render('identifUsuario', { title: 'Usuarios Cadastrados', usuarios, usuario: null});
};
function renderCapImagem(req, res){
    res.render('capturaImagem', { title: 'Captutra Imagem', usuario: null});
};
function renderCadastrarImovel(req, res){
    res.render('cadastroImovel', { title: 'Cadastro do Imóvel', usuario: null});
};
function renderPagConstrucao(req,res){
    res.render('pagConstrucao', {title: 'Página em Construção', usuario: null});
};

function cadastrarUsuario(req, res){

    const{cpf, nome, sexo, email, senha, senhaConfirm} = req.body;

    const novoUsuario = new Usuario(
    cpf,
    nome,
    sexo,
    email,
    senha,
    senhaConfirm
    );
    usuarios.push(novoUsuario);

    res.render('identifUsuario', {
        title: 'Bem-vindo(a)!',
        usuario: novoUsuario,
        usuarios
    });
};

module.exports = {
    cadastrarUsuario,
    renderHome,
    renderLogin,
    renderCadastroUser,
    renderIdentificacao,
    renderCapImagem,
    renderCadastrarImovel,
    renderPagConstrucao
};