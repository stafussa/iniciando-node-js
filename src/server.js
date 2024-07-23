var express = require("express")
var app = express();

//configurando o servidor para usar o EJS

app.set('view engine', 'ejs');

//passandoo caminho da pasta views

app.set('views', 'src/views');

//mostrando a pagina index.ejs

app.get('/', function (request, response) {
    response.render('index');
});


app.get('/adicionar', function (request, response) {
    response.render('adicionar');
});
//iniciando o servidor

app.listen(3003, function () {
    console.log('servidor rodando na porta 3003');
});