/*
Switch - Sintaxe

switch(expressão) {
    case x:
        // código 
        break;
    
    case y:
        // código
        break;

    default:
        // código
}
*/
switch (new Date().getDay()) {
    case 0:
        day = "Domingo";
        break
    case 1:
        day = "Segunda-Feira";
        break
    case 2:
        day = "Terça-Feira";
        break
    case 3:
        day = "Quarta-Feira";
        break
    case 4:
        day = "Quinta-Feira";
        break
    case 5:
        day = "Sexta-Feira";
        break
    case 6:
        day = "Sábado";
}
console.log(day);
document.getElementById("resultado").innerHTML = day