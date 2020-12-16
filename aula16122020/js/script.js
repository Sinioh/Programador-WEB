// Functions
/*
let p1 = prompt('Informe um valor numérico: ');
let p2 = prompt('Informe outro valor numérico: ');

function minhaFuncao(p1, p2) {
    return p1 * p2;
}

document.getElementById("resultado").innerHTML = minhaFuncao(p1, p2);
*/
// Converter Fahrenheit em Celsius:
// Fórmula: (5/9) * (fahrenheit-32)
/*
let f = prompt("Qual a temperatura em Fahrenheit?", 77);

function toCelsius(f) {
 return (5/9) * (f -32);
}
document.getElementById("resultado").innerHTML = toCelsius(f);
*/
/*carro();

function carro() {
    var carName = "Fusca";
    document.getElementById("resultado").innerHTML = typeof carName + " " + carName
}
document.getElementById("resultado1").innerHTML = typeof carName;
*/  
// EXERCÍCIOS

// 1. Criar uma função para saudação com "Alô mundo"
/*aloMundo();

function aloMundo() {
    let hello = ("Alô Mundo");
    document.getElementById("resultado").innerHTML = hello
}
*/
// 2. Criar uma função para somar 2 números passados como parâmetro.
/*
let z = prompt("Digite um número")
let x = prompt("Digite outro número para somar")

function adicao(z, x) {
    return (parseInt(z) + parseInt(x))
}
document.getElementById("resultado1").innerHTML = adicao(z, x);
*/
// 3. Criar uma função que pergunte seu nome e idade e escreva em um parágrafo
// do html um dos dados recebidos
let a = prompt("Digite seu nome")
let b = prompt("Digite sua Idade")

function nomeIdade(a, b) {
    return (a + ' ' + b)
}
document.getElementById("resultado2").innerHTML = nomeIdade(a, b);