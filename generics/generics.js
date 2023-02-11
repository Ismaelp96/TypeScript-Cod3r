"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(2));
console.log(echo({ nome: 'João', idade: 2 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('Paulo').length);
console.log(echoMelhorado(24));
console.log(echoMelhorado({ nome: 'Paulo', idade: 24 }));
//# sourceMappingURL=generics.js.map