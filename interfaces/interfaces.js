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
//# sourceMappingURL=interfaces.js.map