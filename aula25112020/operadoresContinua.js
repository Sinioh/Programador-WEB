// Revisando
/*
+, -, *, /, % (Adição, Substração, Multiplicação, Divisão e Módulo)
+ (Concatenação)
+, - (Operadores unários)
++, -- (Incremento, decremento)
*/

let texto1 = 'Uma'
let texto2 = 'String'
let separador = ' ';
console.log(texto1 + separador + texto2);

let num1 = 10;
console.log(-num1);

// Operadores de comparação (Retornam um booleano)
// =    → Atribuição
let numAnon = 16;
console.log(numAnon);
// Igualdade
console.log(10 == '10');
// Igualdade de valor e tipo
console.log(20 === '20');
// Diferente comparação de valor
console.log(10 != '10');
// Diferente comparação de valor e tipo
console.log(10 !== '10');
/* Concatenação Lógica 'e' (&&), é necessário que
todos os testes sejam verdadeiros 
para retornar verdadeiro */ 
/* Concatenação Lógica 'ou' (||), é necessário que
pelo menos um teste seja verdadeiro 
para retornar verdadeiro */
let x = 10, y = '5';
if (x == 10 && y === 5) {
    console.log('Teste lógico Verdadeiro')
} else {
    console.log('Teste lógico Falso')
};

/* >, <, >= , <=
Comparação: maior que; menor que;
maior igual a; menor igual a */
let m = 10, n = 10; // Declaração de variáveis 
if (m <= n) { // Teste Lógico
    console.log('Sim');
} else {
    console.log('Não');
};