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
    saudar(sobrenome) {
        console.log(`Olá, me chamam de ${this.nome} ${sobrenome}!`);
    },
};
saudarComOi(pessoa);
mudarNome(pessoa);
saudarComOi(pessoa);
// saudarComOi({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('SkyWalker');
// Usando Class...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOi(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
//# sourceMappingURL=interfaces.js.map