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
