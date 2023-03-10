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
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
    // ...
  }
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}
const f40 = new Ferrari('F40', 324)
console.log(`Marca:${f40.marca} Modelo:${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters
class Pessoa {
  private _idade: number = 0
  get idade(): number {
    return this._idade
  }
  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  }
}

const pessoa1 = new Pessoa()
pessoa1.idade = 10 // set
console.log(pessoa1.idade) // get
pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio
  }
}

// const m1 = new Matematica()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
// console.log(new Matematica().areaCirc(4)) sem static

console.log(Matematica.areaCirc(4))

// Abstract Class
abstract class Calculo {
  protected resultado: number = 0

  abstract executar(...numeros: number[]): void

  getResultado(): number {
    return this.resultado
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a)
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a)
  }
}

// polimorfismo: em momentos diferentes tem formas diferentes soma ou mutiplicação nos exemplos abaixo
let c1: Calculo = new Soma()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

c1 = new Multiplicacao()
c1.executar(2, 3, 4, 5)
console.log(c1.getResultado())

// Construtor Privado & Singleton
class Unico {
  private static instance: Unico = new Unico()
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance
  }
  agora() {
    return new Date()
  }
}
// const errado = new Unico()
console.log(Unico.getInstance().agora())

// Atributos Somente Leitura
class Aviao {
  public readonly modelo: string

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo
  }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)
