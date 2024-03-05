let botao = document.getElementById('enviar');

let lista = document.getElementById('listagem');

fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => {
    if (!response.ok) {
      alert('Nao encontrado');
    }
    return response.json();
  })
  .then((data) => {
    let li = document.createElement('li');
    li.textContent = 'Nome: ' + data.name + '  Id: ' + data.id;
    lista.appendChild(li);
  });

botao.addEventListener('click', () => {
  let idPersonagem = document.getElementById('id');
  let idPersonagemValue = parseFloat(idPersonagem.value);
  fetch(`https://rickandmortyapi.com/api/character/${idPersonagemValue}`)
    .then((response) => {
      if (!response.ok) {
        alert('Nao encontrado');
      }
      return response.json();
    })
    .then((data) => {
      lista.innerHTML = '';
      let li = document.createElement('li');
      li.textContent = 'Nome: ' + data.name + '  Id: ' + data.id;
      lista.appendChild(li);
    })
    .catch((erros) => {
      alert('erro', erros);
    });
});
