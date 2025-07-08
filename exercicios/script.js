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