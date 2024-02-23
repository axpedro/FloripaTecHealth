let array = [
    {
      nome: "Rayane",
      sobrenome: "Cristina",
      idade: 21
    },
    {
      nome: "Carlos",
      sobrenome: "Henrique",
      idade: 17
    },
    {
      nome: "Julio",
      sobrenome: "Cesar",
      idade: 19
    },
    {
      nome: "Camila",
      sobrenome: "Fernandes",
      idade: 18
    },
    {
        nome: "Julia",
        sobrenome: "Fernandes",
        idade: 10
      },
      {
        nome: "Bruno",
        sobrenome: "Albuquerque",
        idade: 31
      },
      {
        nome: "Túlio",
        sobrenome: "Bastos",
        idade: 22
      },
      {
        nome: "Cristiane",
        sobrenome: "Maria",
        idade: 41
      },
    ]
   var menorIdade = array.filter((idade) => idade.idade <18);

 var menor18 = menorIdade.map((idade) => {
    idade.anosParaMaioridade = 18 - idade.idade;
return idade;
});
     
        console.log(menor18);
    // menorDezoito.map((idade) => function(){
    // array.anosParaMaioridade = 18-idade;


    // });
    // console.log(menorDezoito);
    //console.log(array);


 var listaMaiores = array.filter(idade => idade.idade >=18);
// console.log(listaMaiores);
var trinta = listaMaiores.find(idade => idade.idade >30);
console.log(trinta.nome +" "+ trinta.sobrenome);
var inserir = document.getElementById('insira');
inserir.innerText = trinta.nome + " " + trinta.sobrenome;
// var user = {
// nome: "pedro",
// dataNasci : 1988,
// calculaIdade: function calcularIdade(){
//     var anoAtual = new Date();
//     var ano = anoAtual.getFullYear;
//     var idade = ano-dataNasci;
//     console.log(idade);
// }
//    };

