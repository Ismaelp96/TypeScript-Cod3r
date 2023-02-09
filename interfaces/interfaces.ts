interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
}

function saudarComOi(pessoa: Humano) {
  console.log('Óla, ' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa = {
  nome: 'João',
  idade: 27,
}

saudarComOi(pessoa)
mudarNome(pessoa)
saudarComOi(pessoa)
saudarComOi({ nome: 'Jonas', idade: 27, altura: 1.75 })
