let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');


let botaosomar = document.getElementById("somar");
botaosomar.addEventListener('click',soma);
function soma(){
    let valorUm = parseInt(num1.value);
    let valorDois= parseInt(num2.value);
    let resultado =  valorUm + valorDois;
    document.getElementById("resultado").value = resultado;
    }


    let botaoSubtrair = document.getElementById("subtrair");
    botaoSubtrair.addEventListener('click',subtrair);
    function subtrair(){
        let valorUm = parseInt(num1.value);
        let valorDois= parseInt(num2.value);
        let resultado =  valorUm - valorDois;
        document.getElementById("resultado").value = resultado;
        }

        let botaoDivdir = document.getElementById("dividir");
        botaoDivdir.addEventListener('click',dividir);
    function dividir(){
        let valorUm = parseInt(num1.value);
        let valorDois= parseInt(num2.value);
        let resultado =  valorUm / valorDois;
        document.getElementById("resultado").value = resultado;
        }

        let botaoMultiplicar = document.getElementById("multiplicar");
        botaoMultiplicar.addEventListener('click',multiplicar);
    function multiplicar(){
        let valorUm = parseInt(num1.value);
        let valorDois= parseInt(num2.value);
        let resultado =  valorUm * valorDois;
        document.getElementById("resultado").value = resultado;
        }