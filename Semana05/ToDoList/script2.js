var listaInputs = document.querySelectorAll('ul li span');
var tarefaInput = document.getElementById('tarefa');
var botaoInserir = document.getElementById('inserir');
var lista = document.getElementById('lista');
var contador = 0;
var numerador = document.getElementById('contador');
var listaLocal = [];

function checaLista() {
  var isDuplicate = false;
  var inputComTrim = tarefaInput.value.trim().toLowerCase();

  if (!inputComTrim) {
    alert('Você não pode inserir um campo vazio');
    tarefaInput.value = '';
    return;
  }

  listaInputs = document.querySelectorAll('ul li span');

  for (var i = 0; i < listaInputs.length; i++) {
    var elementosSpan = listaInputs[i].textContent.trim().toLowerCase();
    if (inputComTrim === elementosSpan) {
      isDuplicate = true;
      break;
    }
  }
  if (isDuplicate) {
    alert('Você já possui uma tarefa adicionada com este nome!');
    tarefaInput.value = '';
    return;
  }

  lista.innerHTML +=
    '<li><input type="checkbox" />' +
    '<span>' +
    tarefaInput.value +
    '</span>' +
    '<button onclick="deletar(this)" class="remove"><i class="fa-solid fa-trash"></i></button></li>';

  verificaTarefa();
  
  
  insereLocalStorage(tarefaInput.value);

  var checkbox = document.querySelector('ul li:last-child input[type="checkbox"]');
  checkbox.addEventListener('click', function() {
    marcaTarefaConcluida(this); 
  });

  tarefaInput.value = '';
  contador += 1;
  numerador.innerHTML = contador;

}

botaoInserir.addEventListener('click', function (event) {
  checaLista();
});

function insereLocalStorage(tarefaValue) {
  let ativo = false;
  let tarefaObj = { tarefaValue, ativo };
  listaLocal.push(tarefaObj);
  localStorage.setItem("tasks", JSON.stringify(listaLocal));
}

function deletar(target) {
  var listItem = target.closest('li');
  var checkbox = listItem.querySelector('input[type="checkbox"]');
  
  if (target.classList.contains('remove')) {
    var confirmaExcluir = confirm('Essa exclusão é permanente, deseja continuar?');
    if (confirmaExcluir) {
      listItem.remove();
      numerador.innerHTML = contador -= 1;
      marcaTarefaConcluida(checkbox);
    }
  }
}
//const result = words.filter((word) => word.length > 6);

function procuraTarefa (tarefaValue){
 let MarcarTrue = listaLocal.filter((tarefa) => tarefa == tarefaValue);
 if(MarcarTrue.length > 0){
  MarcarTrue.ativo =!MarcarTrue.ativo;
 }
 
}
var checkbox = listItem.querySelector('input[type="checkbox"]');
checkbox.addEventListener('click', function() {
  marcaTarefaConcluida(checkbox);
});

function marcaTarefaConcluida(checkbox) {
  var span = checkbox.nextElementSibling;
  var tarefaValue = span.textContent.trim();

  // Atualize a listaLocal marcando a tarefa como concluída
 listaLocal = listaLocal.map((tarefa)=> {
if(tarefa.tarefaValue === tarefaValue ){
  tarefa.ativo =!tarefa.ativo; //troca de false para true
}
return tarefa;

 });
 //joga novamente a lista atualizada pro localstorage
  localStorage.setItem("tasks", JSON.stringify(listaLocal));
}

function verificaTarefa() {
  var listaLocalString = localStorage.getItem('tasks');
  if (listaLocalString) {
    listaLocal = JSON.parse(listaLocalString);
  } else {
    console.log("lista vazia");
  }
}
