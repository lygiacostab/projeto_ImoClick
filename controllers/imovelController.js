const Imovel = require('../models/Imovel');


    const imoveis = [ 
    new Imovel(
        1,
        "Casa Terreo",
        "2 quartos, sala, banheiro, cozinha espaçosa, aceita pet.",
        "Avenida Ribeiro e Silva, nº354",
        "Venda",
        "R$ 400.000,00",
        "/images/IMOVEIS/casa1-loncrina.webp"
    ),
    new Imovel(
        2,
        "Apartamento",
        "2 quartos, sala, banheiro, cozinha, não aceita pet.",
        "Rua Ribeirão, nº114, apto 5",
        "Venda",
        "R$ 150.000,00",
        "/images/IMOVEIS/casa4-apto.webp"
    )
    ];

    function renderCatalogo(req, res){
        res.render('catalogo', {
            title: 'Catálogo de Imóveis',
            usuario: null,
            imoveis
        });
    };

module.exports = {
    renderCatalogo,
};