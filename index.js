const express = require('express');
const app = express();                 

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const cliente = require('./model/cliente');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/home.html')
})

app.post('/processar', function(req, res){
  var cli = new cliente();
    cli.cpf = req.body.cpf;
    cli.nome = req.body.nome;
    cli.telefone = req.body.telefone;
    cli.endereco = req.body.endereco;

    cli.serv.descricao = req.body.descricao;
    cli.serv.data = req.body.data;
    cli.serv.tipo = req.body.tipo;
    cli.serv.tempo = req.body.tempo;
    cli.serv.valor = req.body.valor;
    cli.serv.total = req.body.total;
    cli.serv.icms = req.body.icms;
    cli.serv.percentual = req.body.percentual;
    cli.serv.servico = req.body.servico;

    cli.serv.fat.emissao = req.body.emissao;
    cli.serv.fat.vencimento = req.body.vencimento;

    cli.serv.calcularICMS();

    res.render('resultado.ejs', {
      cpf: cli.cpf, 
      nome: cli.nome, 
      telefone: cli.telefone, 
      endereco: cli.endereco,
      descricao: cli.serv.descricao,
      data: cli.serv.data,
      tipo: cli.serv.tipo,
      tempo: cli.serv.tempo,
      valor: cli.serv.valor,

      total: cli.serv.total,
      icms: cli.serv.icms,
      percentual: cli.serv.percentual,
      servico: cli.serv.servico
    })
})