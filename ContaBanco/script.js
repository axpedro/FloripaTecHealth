var botaoEnviar = document.getElementById('enviar');
var listaCliente = [];
var listaConta = [];
var botaoSacar = document.querySelector('#sacar');
//botaoSacar.addEventListener('click',  saque);
//botaoSaldo.addEventListener('click', verSaldo);

class Cliente {
  nomeCompleto;
    
constructor(nomeCompleto) {
    this.nomeCompleto = nomeCompleto;
    
  }
}

class Conta{
  cliente;
  numeroConta;
  saldo;
  ativa; //boolean

constructor(cliente, numeroConta, saldo, ativa = true){

this.cliente = cliente;
this.numeroConta = numeroConta;
this.saldo = saldo;
this.ativa = ativa;

}
 
saque(valor){
    
    var valor = document.querySelector('saque');
    parseFloat(valor);
    saldo-valor;
  }

  deposito(valor){
    saldo+valor;
  }
  verSaldo(){
    var botaoSaldo = document.getElementById('verSaldo');
    
    console.log(this.saldo);
  }
}

botaoEnviar.addEventListener('click', function (e) {
  e.preventDefault();
  var nome = document.getElementById('nome');
  var numeroConta = document.getElementById('numeroConta');
  var saldo = document.getElementById('saldo');
  parseFloat(saldo);
  parseFloat(numeroConta);
  const cliente = new Cliente(nome);
  const conta = new Conta(cliente, numeroConta,saldo,ativa = true);
  listaCliente.push(cliente);
  listaConta.push(conta);
  console.log(listaCliente);
  console.log(listaConta);
});


//numeroConta, parseFloat(saldo) || 0