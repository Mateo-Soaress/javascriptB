let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
alert("Resultado da soma: " + (num1 + num2)); 



var global = "variável global";
console.log(global);

function exemplo2() {
    var local = "variável local";
    console.log(local);
}
exemplo2();

let x = 10;
if (x > 5) {

    var y = 20;
    console.log("Valor de y: " + y);

}

const _constante = "texto";
_constante = "outro texto";
console.log(_constante);

console.log(y)

function saudacao() {
    alert("Bem-vindo ao nosso site (Dnv....)");
}