interface Humano {
  nome: string
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
