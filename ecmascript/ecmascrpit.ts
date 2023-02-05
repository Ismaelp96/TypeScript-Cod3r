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

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernando']
const turmaB: string[] = ['Fernanda', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)
