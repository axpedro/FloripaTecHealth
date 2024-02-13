let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let resultado;
document.getElementById('somar') = somar(num1, num2);

function somar(num1, num2) {
 resultado =  num1 + num2;
 return resultado
}
document.getElementById("resultado").innerText = resultado;
