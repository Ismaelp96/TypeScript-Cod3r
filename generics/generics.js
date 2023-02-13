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
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([4, 5, 6]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);
imprimir([
    { nome: 'David', idade: 22 },
    { nome: 'Leonardo', idade: 23 },
    { nome: 'Lurdinha', idade: 24 },
]);
//# sourceMappingURL=generics.js.map