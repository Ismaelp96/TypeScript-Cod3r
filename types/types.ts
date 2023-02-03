// string
let nome: string = 'João'
console.log(nome)
// nome = 28 não aceita troca de tipo

// numbers
let idade: number = 27
// idade = 'Lorena' não aceita troca de tipo
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 está errado mas aparece no console
console.log(possuiHobbies)

// tipos explícitos

let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

// array
let hobbies: any[] = ['cozinhar', 'praticar esportes']
console.log(hobbies[1])
console.log(typeof hobbies)

hobbies = [100, 200, 300, 'esportes']
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ['Av Principal', 99, '']
console.log(endereco)

endereco = ['Rua Importante', 1260, 'Bloco C']
console.log(endereco)

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 10, // 2
  Laranja,
  Amerelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amerelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {
  marca: 'BMW',
  ano: 2019,
  Cavalos: 300,
}
console.log(carro)

// funções
function retornarMeuNome(): string {
  return nome
  //   return minhaIdade
}
console.log(retornarMeuNome())

function digaOi(): void {
  console.log('Oi')
  //   return minhaIdade
}
digaOi()

function multiplicar(NumA: number, NumB: number): number {
  return NumA * NumB
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// tipo função
let calculo: (x: number, y: number) => number
// calculo = digaOi
// calculo()
calculo = multiplicar
console.log(calculo(5, 6))

// objetos
let usuario: { nome: string; idade: number } = {
  nome: 'João',
  idade: 27,
}
console.log(usuario)
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
  idade: 31,
  nome: 'Maria',
}
console.log(usuario)

// Desafio: Criar um objeto funcionário com: Array de strings com os nomes dos supervisores, função de bater ponto
// que recebe a hora(número) e retorna uma string -> ponto normal (<=8) -> fora do hoário (>8)
// Alias
type Funcionario = {
  supervisores: string[]
  baterPonto: (horas: number) => string
}
let funcionario: Funcionario = {
  supervisores: ['Ana', 'Fernando'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal!'
    } else {
      return 'Fora do horário!'
    }
  },
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

let funcionario2: Funcionario = {
  supervisores: ['Bia', 'Carlos'],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto normal!'
    } else {
      return 'Fora do horário!'
    }
  },
}
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(10))
console.log(funcionario2.baterPonto(7))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`)
nota = '10'
console.log(`Minha nota é ${nota}`)
// nota = true

// Checando tipos
let valor = 30
if (typeof valor === 'number') {
  console.log('É um number')
} else {
  console.log(typeof valor)
}

// Never
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) falha('Precisa ter um nome')

    if (this.preco <= 0) {
      falha('Preço inválido!')
    }
  },
}
produto.validarProduto()

// Valores Opcionais com Tipo "Null"
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
  nome: string
  tel1: string
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '98765432',
  tel2: null,
}
console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // assumiu o tipo any
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio
type ContaBancaria = {
  saldo: number
  depositar: (valor: number) => void
}
let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor
  },
}

type Correntista = {
  nome: string
  contaBancaria: ContaBancaria
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432'],
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
