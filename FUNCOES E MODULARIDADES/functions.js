// Função para calcular o IMC
function calculateIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC
function classifyIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    return "Obesidade";
}

// Função principal
function checkIMC(weight, height) {
    const imc = calculateIMC(weight, height);
    const classification = classifyIMC(imc);
    return `Seu IMC é ${imc.toFixed(2)} (${classification}).`;
}

// Usando as funções
console.log(checkIMC(/*Seu peso , sua altura*/));
