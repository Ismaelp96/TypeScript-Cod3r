"use strict";
function saudarComOi(pessoa) {
    console.log('Óla, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
};
saudarComOi(pessoa);
mudarNome(pessoa);
saudarComOi(pessoa);
saudarComOi({ nome: 'Jonas', idade: 27, altura: 1.75 });
//# sourceMappingURL=interfaces.js.map