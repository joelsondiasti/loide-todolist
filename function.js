// Tarefa: Ao digitar uma tarefa no campo de texto e clicar no botão
// CRIAR devemos adicionar uma tarefa na lista não ordenada

// Capturar os elementos
// Elementos: campo de texto, botão e a lista

var campoDeTexto = document.getElementById("campoDeTexto");
var botaoCriar = document.getElementById("botaoCriar");
var lista = document.getElementById("tarefas");

// console.log(botaoCriar)

// Identificar o evento ao qual preciso reagir
// Evento: Clique no botão CRIAR

botaoCriar.addEventListener("click", () => {
  //   console.log(campoDeTexto.value);
  var novoItem = document.createElement("li");
  novoItem.append(campoDeTexto.value);

  lista.appendChild(novoItem);
  campoDeTexto.value = ""
});


