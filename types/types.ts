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
