var botaoEnviar = document.getElementById('enviar');
var listaCliente = [];
var listaConta = [];
//var botaoSacar = document.getElementById('sacar');
//botaoSacar.addEventListener('click',  saque);
var botaoSaldo = document.getElementById('verSaldo');

class Cliente {
  nome;
    
constructor(nome) {
    this.nome = nome;
    
  }
}

class Conta {
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
    
    this.valor -=  valor;
  }

  deposito(valor){
    this.saldo+=valor;
  }
  verSaldo(){
    
    console.log(this.saldo);
  }
}

class Conta extends Cliente {
  ativa;
  Cliente;

  constructor(nomeCompleto, numeroConta, saldo, ativa) {
    super.nomeCompleto = nomeCompleto;
    super.numeroConta = numeroConta;
    super.saldo = saldo;
    this.ativa = false;
  }

  saque(valor) {
    return super.saldo - valor;
  }
  deposito(valor) {
    return super.saldo + valor;
  }

  verSaldo() {
    console.log(super.saldo);
  }
}

botaoEnviar.addEventListener('click', function (e) {
  e.preventDefault();
  var nome = document.getElementById('nomeInput');
  var numeroConta = document.getElementById('numeroConta');
  var saldo = document.getElementById('saldo');
  const cliente = new Cliente(nome.value);
  const conta = new Conta(cliente, parseFloat(numeroConta.value),parseFloat(saldo.value),ativa = true);
  
  nome.value='';
  numeroConta.value='';
  saldo.value='';
  listaCliente.push(cliente);
  listaConta.push(conta);
  console.log(listaCliente);
  console.log(listaConta);
});

botaoSaldo.addEventListener('click', function(e){
  listaConta[0].verSaldo();
  

});

//numeroConta, parseFloat(saldo) || 0
