// Seleção de Elementos
const title01 = document.getElementById("title");
const paragraph = document.querySelector(".description");

// Modificação de Conteúdo
title.textContent = "Novo Título";
paragraph.textContent = "O parágrafo foi alterado via JavaScript.";

// Seleção
const title02 = document.getElementById("title");

// Alteração de estilos
title.style.color = "blue";
title.style.fontSize = "2em";
title.style.textAlign = "center";

// Adicionando um elemento
const newParagraph = document.createElement("p");
newParagraph.textContent = "Este é um novo parágrafo.";
document.body.appendChild(newParagraph);

// Removendo um elemento
const oldParagraph = document.querySelector(".description");
oldParagraph.remove();

// Seleção do botão
const button = document.getElementById("changeText");

// Adicionando evento de clique
button.addEventListener("click", () => {
    alert("Você clicou no botão!");
});

button.addEventListener("click", () => {
    title.textContent = "Texto alterado após clique!";
});

// Adicionando um input para capturar o evento
document.body.innerHTML += '<input type="text" id="nameInput" placeholder="Digite seu nome">';

// Seleção do input
const nameInput = document.getElementById("nameInput");

// Adicionando evento de teclado
nameInput.addEventListener("keyup", (event) => {
    console.log(`Você digitou: ${event.target.value}`);
});