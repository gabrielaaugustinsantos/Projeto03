const fatura = require('./fatura');

module.exports = class serviço {
    constructor(){
        this.descricao = "";
        this.data = "";
        this.tipo = "";
        this.tempo = 0;
        this.valor = 0.0;
        
        this.total = 0.0;
        this.icms = 0.0;
        this.percentual = 0.0;
        this.servico = "";


        this.fat = new fatura();
    }

    calcularICMS(){
      if(this.tipo == '1'){
       this.percentual = 15;
       this.total = this.tempo * this.valor;
       this.icms = this.total * 0.15;
       this.servico = "Instalação de Telefone/Internet";
    } else {
        if(this.tipo == '2'){
          this.percentual = 12;
          this.total = this.tempo * this.valor;
          this.icms = this.total * 0.12;
          this.servico = "Manutenção de Linha Telefônica/Internet";
     } else {
          if(this.tipo == '3'){
            this.percentual = 23;
            this.total = this.tempo * this.valor;
            this.icms = this.total * 0.23;
            this.servico = "Troca de Equipamentos (modem)";
     } else {
            this.percentual = 17;
            this.total = this.tempo * this.valor;
            this.icms = this.total * 0.17;
            this.servico = "Suporte Técnico";
        }
      }
    }    
  }
}
