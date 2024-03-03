var listaInputs = document.querySelectorAll('ul li span');
var tarefaInput = document.getElementById('tarefa');
var botaoInserir = document.getElementById('inserir');
var lista = document.getElementById('lista');
var contador = 0;
var numerador = document.getElementById('contador');
var listaLocal = [];
var checkbox = listItem.querySelector('input[type="checkbox"]');

function checaLista() {
  var isDuplicate = false;
  var inputComTrim = tarefaInput.value.trim().toLowerCase();
    
  if (!inputComTrim) {
    alert('Você não pode inserir um campo vazio');
    tarefaInput.value = '';
    return;
  }
  listaInputs = document.querySelectorAll('ul li span');

  // for (var i = 0; i < listaInputs.length; i++) {
  //   var elementosSpan = listaInputs[i].textContent.trim().toLowerCase();
  //   if (inputComTrim === elementosSpan) {
  //     isDuplicate = true;
  //     break;
  //   }
  // }
  // if (isDuplicate) {
  //   alert('Você já possui uma tarefa adicionada com este nome!');
  //   tarefaInput.value = '';
  //   return;
  // }

  lista.innerHTML +=
    '<li><input type="checkbox" />' +
    '<span>' +
    tarefaInput.value +
    '</span>' +
    '<button onclick="deletar(this)" class="remove"><i class="fa-solid fa-trash"></i></button></li>';
    verificaTarefa();
    // var temOUnao = listaLocal.filter((tarefa)=>tarefa == tarefaInput.value );
    // if(temOUnao){
    //  listaLocal
    //  console.log(listaLocal);
    // }


  insereLocalStorage(tarefaInput.value);
 
 
  tarefaInput.value = '';
  contador += 1;
  numerador.innerHTML = contador;

  
}

botaoInserir.addEventListener('click', function (event) {
  checaLista();
});

function insereLocalStorage(){
  let ativo = false;
   //let tarefaValue = tarefaInput.value;
   let tarefaObj = {tarefaValue, ativo }
   listaLocal.push(tarefaObj);
   localStorage.setItem("tasks", JSON.stringify(listaLocal));
}

function deletar(target) {
   var listItem = target.closest('li');
  var liElement = document.querySelector('input[type="checkbox"]:checked');

if(!liElement){
  alert("Esta tarefa não está maracada como completa");
  return;
}

  if (target.classList.contains('remove')) {
        var confirmaExcluir = confirm(
          'Essa exclusão é permanente, deseja continuar?'
       );
  listItem.remove();
  numerador.innerHTML = contador -= 1;
}


}
function marcarTarefaConcluida(checkbox){
  var span = checkbox.nextElementSibling;
  var tarefaValue = span.textContent.trim();

  // Atualize a listaLocal marcando a tarefa como concluída
  for (var i = 0; i < listaLocal.length; i++) {
    if (listaLocal[i].tarefaValue === tarefaValue) {
      listaLocal[i].ativo = true;
      break;
    }
  }

  
  localStorage.setItem("tasks", JSON.stringify(listaLocal));

}





function verificaTarefa(){
var listaLocalString = localStorage.getItem('tasks');
if(listaLocalString){
 listaLocal = JSON.parse(listaLocalString);
}
else{
  console.log("lista vazia");

}

}


// lista.addEventListener('click', function (event) {
//   var target = event.target;
//   if(!target.classList.contains('remove')){
//     alert("Essa tarefa não está marcada como concluída");
//     return;
//   }
//   if (target.classList.contains('remove')) {
//     var confirmaExcluir = confirm(
//       'Essa exclusão é permanente, deseja continuar?'
//     );
    //     if (confirmaExcluir) {
//       var listItem = target.closest('li');
//       if (listItem) {
//         listItem.remove();
//         contador -= 1;
//         numerador.innerHTML = contador;
//       }
//     }
//   }
// });



//lista.compareDocumentPosition()

// function updateDeleteButtonListener() {
//   var botaoExcluir = document.querySelectorAll('.remove');
//   botaoExcluir.forEach(function (button) {
//     button.addEventListener('click', function (event) {
//       var target = event.target;
//       if (target.classList.contains('remove')) {
//         // Find the closest <li> element and remove it
//         var listItem = target.closest('li');
//         if (listItem) {
//           listItem.remove();
//         }
//       }
//     });
//   });
// }
// updateDeleteButtonListener();
