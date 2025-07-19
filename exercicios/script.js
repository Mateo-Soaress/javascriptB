// 1 - Soma simples
function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado: " + (num1 + num2);
}

// 2 - Verificar idade
function verificarIdade() {
    let idade = Number(document.getElementById("idade2").value);

    if (idade >= 18) {
        document.getElementById("resultado2").innerText = "Resultado: maior de idade"
    }
    else {
        document.getElementById("resultado2").innerText = "Resultado: menor de idade"       
    }
}

// 3 - Contagem de caracteres
function contarCaracteres() {
    let texto = document.getElementById("texto3").value;
    document.getElementById("resultado3").innerText = "Resultado: " + texto.length;
}

// 4 - Verificar Par ou Ímpar
function verificarParImpar() {
    let numero = Number(document.getElementById("numero4").value);

    if (numero % 2 == 0) {
        document.getElementById("resultado4").innerText = "Resultado: é par"
    }
    else {
        document.getElementById("resultado4").innerText = "Resultado: é ímpar"
    }
}

// 5 - Nome em Caixa Alta
function transformarCaixaAlta() {
    let nome = document.getElementById("nome5").value;
    let nomeCaixaAlta = nome.toUpperCase();
    
    document.getElementById("resultado5").innerText = "Resultado: " + nomeCaixaAlta
}

// 6 - Maior de Dois Números
function encontrarMaior() {
    let numero1 = Number(document.getElementById("numero6/1").value);
    let numero2 = Number(document.getElementById("numero6/2").value);
    
    if (numero1 > numero2) {
        document.getElementById("resultado6").innerText = "Resultado: o maior número é o " + numero1
    }
    else if (numero2 > numero1) {
        document.getElementById("resultado6").innerText = "Resultado: o maior número é o " + numero2
    }
    else {
        document.getElementById("resultado6").innerText = "Resultado: os números são iguais"
    }
}

// 7 - Tabuada
function gerarTabuada() {
    let numero = Number(document.getElementById("numero7").value);

    for (let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        document.getElementById("resultado7").innerHTML += numero + " x " + i + " = " + multiplicacao + "</br>"
    }
}

// 8 - Contador de 1 a 10
function contarAte10() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById("resultado8").innerHTML += i + "</br>";
    }
}

// 9 - Média de Notas
function calcularMedia() {
    let nota1 = Number(document.getElementById("nota9/1").value);
    let nota2 = Number(document.getElementById("nota9/2").value);
    let nota3 = Number(document.getElementById("nota9/3").value);
    let media = (nota1 + nota2 + nota3) / 3;
    media = media.toFixed(2);

    let resultado;

    if (media >= 6) {
        resultado = "Aprovado";
    }
    else {
        resultado = "Reprovado";
    }

    document.getElementById("resultado9").innerHTML = "Média: " + media + "</br> Resultado: " + resultado
}

// 10 - Conversor de Temperatura
function converterTemperatura() {
    let temperaturaCelsius = Number(document.getElementById("temperatura10").value);
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    document.getElementById("resultado10").innerText = "Resultado: " + temperaturaFahrenheit + "°F"
}

// 11 - Dia da Semana
function encontrarDia() {
    let numero = Number(document.getElementById("numero11").value);
    let dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    if (numero <= 7 && numero >= 1) {
        document.getElementById("resultado11").innerText = "Resultado: " + dias[numero - 1];
    }
    else {
        document.getElementById("resultado11").innerText = "[ERRO] Número inválido"
    }
}

// 12 - Senha Simples
function validarSenha() {
    let senha = Number(document.getElementById("senha12").value);

    if (senha == 1234) {
        document.getElementById("resultado12").innerText = "Acesso permitido!"
    }
    else {
        document.getElementById("resultado12").innerText = "Senha incorreta"
    }
}

// 13 - Contagem Regressiva
async function contarRegressivamente() {
    for (let i = 10; i >= 1; i--) {
        document.getElementById("resultado13").innerHTML += i + "</br>"
    }
}