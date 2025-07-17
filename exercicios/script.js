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
        document.getElementById("resultado7/" + i).innerText = numero + " x " + i + " = " + multiplicacao
    }
}