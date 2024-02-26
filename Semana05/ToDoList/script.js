var listaInputs = document.querySelectorAll('ul li span');
var tarefaInput = document.getElementById('tarefa');
var botaoInserir = document.getElementById('inserir');
var lista = document.getElementById('lista');
var contador = 0;
var numerador = document.getElementById('contador');




function checaLista() {
  var inputComTrim = tarefaInput.value.trim().toLowerCase();

  if (inputComTrim == '') {
    alert('Você não pode inserir um campo vazio');
    tarefaInput.value = '';

    return;
  }
   
    for (var i = 0; i < listaInputs.length; i++) {
      var elementosSpan = listaInputs[i].textContent.trim().toLowerCase();
      if (inputComTrim === elementosSpan) {
        alert('Você já possui uma tarefa adicionada com este nome!');
        tarefaInput.value = '';
        return;
      } 


  }
  lista.innerHTML +=
  '<li><input type="checkbox" />' +
  '<span>' +
  tarefaInput.value +
  '</span>' +
  '<button class="remove"><i class="fa-solid fa-trash"></i></button></li>';
tarefaInput.value = '';
contador +=1;
numerador.innerHTML = contador;
updateDeleteButtonListener();


  }
 

  

  


botaoInserir.addEventListener('click', function (event) {
  checaLista();
});


lista.addEventListener('click', function (event) {
  var target = event.target;
  if (target.classList.contains('remove')) {

    var confirmaExcluir = confirm("Essa exlusão é permanente, deseja continuar?");
    // Find the closest <li> element and remove it

    if(confirmaExcluir){
      var listItem = target.closest('li');
    if (listItem) {
      listItem.remove();
      contador -=1;
  numerador.innerHTML = contador;
    }
    }
    
  }
}
);
function updateDeleteButtonListener() {
  var botaoExcluir = document.querySelectorAll('.remove');
  botaoExcluir.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var target = event.target;
      if (target.classList.contains('remove')) {
        // Find the closest <li> element and remove it
        var listItem = target.closest('li');
        if (listItem) {
          listItem.remove();
        }
      }
    });
  });
}
updateDeleteButtonListener();
