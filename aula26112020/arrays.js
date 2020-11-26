// Conceitos básicos sobre Arrays
// Indice        0        1        2
let frutas = ['Maçã', 'Banana', 'Pêra'];
// console.log(frutas.length);

// console.log(typeof(frutas))
// Métodos
// push → acrescenta um elemento ao final do array
frutas.push('Limão');
// console.log(frutas.length);
// console.log(frutas);

// unshift → acrescenta um elemento ao início do array
frutas.unshift('Goiaba');
// console.log(frutas.length);
console.log(frutas.sort().join(' '));

// Iteração do Array
// frutas.forEach(item => 'console.log(item)');
frutas.forEach((item, index, array) => {
    console.log(index, item);
});



/*
// pop → elimina um elemento ao final do array
frutas.pop('');
console.log(frutas.length);
console.log(frutas);

// shift → elimina um elemento ao início do array
frutas.shift('');
console.log(frutas.length);
console.log(frutas);
*/