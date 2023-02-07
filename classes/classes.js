"use strict";
// #01
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(25);
aniversario.dia = 25;
aniversario.mes = 4;
aniversario.ano = 1996;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data(); // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);
// #02
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(25);
aniversarioEsperto.dia = 8;
aniversarioEsperto.mes = 6;
aniversarioEsperto.ano = 1998;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta(); // posso omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio class Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// 1) O Desconto é opcional (valor padrão 0)
// 2) Criar dois produtos: passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    // também é public
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} Apartir de: R$${this.precoComDesconto()} (${this.desconto * 100}% OFF)`;
    }
}
const produto1 = new Produto('SSD 280GB', 200.0, 0.15);
const produto2 = new Produto('Monitor 24SBHQ', 780.0);
produto2.desconto = 0.06;
console.log(produto1.resumo());
console.log(produto2.resumo());
