// Variável global
const globalVar = "Eu sou global";

function demoScope() {
    // Variável local
    const localVar = "Eu sou local";

    console.log(globalVar); // Acessa variável global
    console.log(localVar);  // Acessa variável local
}

demoScope();

// Tentativa de acessar variável local fora da função
// console.log(localVar); // Erro: localVar não está definido

function countCharacters(text) {
    const length = text.length; // Variável local
    return `O texto tem ${length} caracteres.`;
}

const message = "Olá, mundo!";
console.log(countCharacters(message)); // Acessa escopo local via retorno
