// Regras de Bloqueio de Escopo
// Com var

let x = 1;
{
    let x = 2;
}
console.log(x);