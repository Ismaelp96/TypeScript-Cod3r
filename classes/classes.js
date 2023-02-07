"use strict";
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
