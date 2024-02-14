

document.addEventListener('DOMContentLoaded', function() {
var data = new Date();
var dia = data.getDay();
var mes = data.getMonth()+1;

let estacao = '';
if ((mes === 12 && dia >= 22) || (mes >= 1 && mes <= 3) || (mes === 3 && dia <= 21)) {
    estacao = 'Verao';
} else if ((mes === 3 && dia >= 22) || (mes >= 4 && mes <= 6) || (mes === 6 && dia <= 21)) {
    estacao = 'Outono';
} else if ((mes === 6 && dia >= 22) || (mes >= 7 && mes <= 9) || (mes === 9 && dia <= 21)) {
    estacao = 'Inverno';
} else {
    estacao = 'Primavera';
}

document.getElementById("estacao").textContent = estacao;
document.getElementById("image").src = estacao+".jpg";
})
