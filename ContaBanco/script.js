var botaoEnviar = document.getElementById('enviar');
var listaCliente = [];

class Cliente {
  nomeCompleto;
  numeroConta;
  saldo;

  constructor(nome, numeroConta, saldo) {
    this.nomeCompleto = nome;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }
}

botaoEnviar.addEventListener('click', function (e) {
  e.preventDefault();
  var nome = document.getElementById('nome').value;
  var numeroConta = document.getElementById('numeroConta').value;
  var saldo = document.getElementById('saldo').value;

  const cliente = new Cliente(nome, numeroConta, parseFloat(saldo) || 0);
  listaCliente.push(cliente);
  console.log(listaCliente);
});