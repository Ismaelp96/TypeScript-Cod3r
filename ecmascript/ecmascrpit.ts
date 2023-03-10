// let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if (estaFrio) {
  let acao = 'Colocar o casaco!'
  console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
  const segredo = 'interno'
  console.log(segredo)
}
revelar()
console.log(segredo)

{
  {
    const def = 'def'
    console.log(def)
  }
}

for (let i = 0; i <= 10; i++) {
  console.log(i)
}
// console.log(i)

// Arrow Function

function somar(n1: number, n2: number): number {
  return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log('Olá')
saudacao()

const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

// this

// function normalComThis() {
//   console.log(this)
// }
// normalComThis

// const normalComThisEspecial = normalComThis.bind({ nome: 'Ismael' })
// normalComThisEspecial()
// // quem é o this??
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// Parâmetros padrão
function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5
): void {
  console.log(inicio)
  while (inicio > fim) {
    inicio--
    console.log(inicio)
  }
  console.log('FIM!')
}
contagemRegressiva()
contagemRegressiva(3)

// Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernando']
const turmaB: string[] = ['Fernanda', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

// Rest
function retornarArray(...args: number[]): number[] {
  return args
}
const numeros = retornarArray(1, 2, 4, 6, 8)
console.log(numeros)

// Rest e Spread
console.log(retornarArray(...numbers))

// Rest & Spread(Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  //   console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParam2(...tupla)

// Destructuring (Array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (Objetio)
const item = {
  nome: 'SSD 480',
  preco: 200,
  caracteristicas: {
    y: 'Novo',
    z: 'e',
    w: 'importado',
  },
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const {
  nome: n,
  preco: p,
  caracteristicas: { w, y, z },
} = item
console.log(n)
console.log(p)
console.log(y, z, w)

// Template String
// sem Template String
const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
// const boasVindas = 'Boas vindas ' + usuarioID + ' Notificações: ' + notificacoes

// com Template String

const boasVindas = `
Boas vindas ao ${usuarioID}, Notificações: ${
  parseInt(notificacoes) > 9 ? '+9' : notificacoes
}`

console.log(boasVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Desafio
// 1
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

//2
const dizerOla = function (nome: string = 'Pessoa'): void {
  console.log(`Ola, ${nome}`)
}
dizerOla()
dizerOla('Anna')

//3
const nums: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums))

// 4
const array: number[] = [55, ...nums, 20]
// array.push(...nums)
console.log(array)

// 5
const notas: number[] = [8.5, 6.3, 9.4]
const [notas1, notas2, notas3] = notas
console.log(notas2, notas1, notas3)

// 6
const cientista = { primeiroNome: 'Will', experiencia: 12 }
const { primeiroNome, experiencia } = cientista
console.log(`Nome: ${primeiroNome}, Experiência: ${experiencia} anos`)

// // Callback
// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback('3s depois...Callback!')
//   }, 3000)
// }
// esperar3s(function (resultado: string) {
//   console.log(resultado)
// })

// // Promise
// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve('4s depois...promise!')
//     }, 4000)
//   })
// }
// esperar3sPromise().then((dado) => console.log(dado))

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => res.json())
//   .then((personagem) => console.log(personagem.name))
//   .catch((err) => console.log(`Catch!! ${err}`))
