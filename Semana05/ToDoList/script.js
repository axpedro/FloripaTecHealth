var listaInputs = document.querySelectorAll('ul li span');
var tarefaInput =document.getElementById('tarefa');
var botaoInserir = document.getElementById('inserir');
var lista = document.getElementById('lista');

function checaLista (){
var inputComTrim = tarefaInput.value.trim().toLowerCase();

    for (var i = 0; i < listaInputs.length; i++) {
    var elementosSpan = listaInputs[i].textContent.trim().toLowerCase();
    if(inputComTrim === elementosSpan ){
        alert('Você já possui uma tarefa adicionada com este nome!');
        tarefaInput.value="";
                return;
        
    } 
    else if(inputComTrim == ""){
        alert('Você não pode inserir um campo vazio');
        tarefaInput.value="";
        return;
    }
    
}
lista.innerHTML += "<li><input type=\"checkbox\" />" + 
"<span>" + tarefaInput.value + "</span>" +
"<button class=\"remove\"><i class=\"fa-solid fa-trash\"></i></button></li>";
tarefaInput.value = "";
}


botaoInserir.addEventListener('click', function(event) {
    checaLista();

});










