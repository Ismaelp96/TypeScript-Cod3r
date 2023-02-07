// #01
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

// #02
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

// Desafio class Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// 1) O Desconto é opcional (valor padrão 0)
// 2) Criar dois produtos: passando dois e três params

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  // também é public
  precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }

  public resumo(): string {
    return `${this.nome} Apartir de: R$${this.precoComDesconto()} (${
      this.desconto * 100
    }% OFF)`
  }
}
const produto1 = new Produto('SSD 280GB', 200.0, 0.15)
const produto2 = new Produto('Monitor 24SBHQ', 780.0)
produto2.desconto = 0.06
console.log(produto1.resumo())
console.log(produto2.resumo())

// Modificadores de Acesso

class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }
    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)

Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar())

console.log(carro1.acelerar())

Array(35)
  .fill(0)
  .forEach(() => carro1.frear())
console.log(carro1.frear())

// simular "erros"
// carro1.velocidadeAtual = 300
// console.log('atual ->' + carro1.velocidadeAtual)

// carro1.velocidadeMaxima = 500
// console.log('Máxima ->' + carro1.velocidadeMaxima)

// carro1.alterarVelocidade(150)
// console.log('atual ->' + carro1.velocidadeAtual)

//OBS:
// private -> apenas dentro da Class!
// protected -> visivel dentro da class e pode ser transmitido por herança!
// Public -> fica visivel para todo mundo!

// Herança
class Ferrari extends Carro {
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}
const f40 = new Ferrari('Ferrari', 'F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())
