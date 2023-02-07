class Data {
  // Público por padrão
  dia: number
  public mes: number // mesmo sem public, por padrão é público
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const aniversario = new Data(25)

aniversario.dia = 25
aniversario.mes = 4
aniversario.ano = 1996

console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data() // posso omitir os "()"
casamento.ano = 2017
console.log(casamento)

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(25)

aniversarioEsperto.dia = 8
aniversarioEsperto.mes = 6
aniversarioEsperto.ano = 1998

console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta() // posso omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)
