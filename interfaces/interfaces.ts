interface Humano {
  nome: string
  idade?: number // opcional
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOi(pessoa: Humano) {
  console.log('Óla, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa: Humano = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, me chamam de ${this.nome} ${sobrenome}!`)
  },
}

saudarComOi(pessoa)
mudarNome(pessoa)
saudarComOi(pessoa)
// saudarComOi({ nome: 'Jonas', idade: 27, altura: 1.75 })
pessoa.saudar('SkyWalker')

// Usando Class...
class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date()
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
  }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOi(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// Interface com Função
interface FuncaoCalculo {
  (a: number, b: number): number
}

let potencia: FuncaoCalculo
potencia = function (base: number, exp: number): number {
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a)
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}

// Uso de Interface para estender Object
interface Object {
  log(): void
}

Object.prototype.log = function () {
  console.log(this.toString())
}

const i = 2
const g = 3
const h = 4

console.log(i)
console.log(g)
console.log(h)
i.log()
y.log()
z.log()

const cli = {
  nome: 'Pedro',
  toString() {
    return this.nome
  },
}
cli.log()
