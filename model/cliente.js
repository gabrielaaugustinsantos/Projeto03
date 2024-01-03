const serviço = require('./serviço');

module.exports = class cliente {
    constructor(){
        this.cpf = "";
        this.nome = "";
        this.telefone = "";
        this.endereco = "";

        this.serv = new serviço();
    }
}