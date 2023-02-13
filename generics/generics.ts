function echo(objeto: any) {
  return objeto
}
console.log(echo('João').length)
console.log(echo(2))
console.log(echo({ nome: 'João', idade: 2 }))

// Usando Generics
function echoMelhorado<TIPO>(objeto: TIPO): TIPO {
  return objeto
}
console.log(echoMelhorado('Paulo').length)
console.log(echoMelhorado<number>(24))
console.log(echoMelhorado({ nome: 'Paulo', idade: 24 }))

// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([4, 5, 6])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string; idade: number }>([
  { nome: 'Fulano', idade: 22 },
  { nome: 'Cicrano', idade: 23 },
  { nome: 'Beltrano', idade: 24 },
])

type Aluno = { nome: string; idade: number }
imprimir<Aluno>([
  { nome: 'David', idade: 22 },
  { nome: 'Leonardo', idade: 23 },
  { nome: 'Lurdinha', idade: 24 },
])

// Tipo genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Criando Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}
  abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia!').executar())
// console.log(new OperacaoBinaria(3, 7).executar())
// console.log(new OperacaoBinaria(3, ' opa').executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}
console.log(new SomaBinaria(3, 4).executar())
console.log(new SomaBinaria(30, 434).executar())

class DiferancaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }
  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(13, 2, 2023)
console.log(new DiferancaEntreDatas(d1, d2).executar())

// Desafio: Class Fila
// Atributo: fila(Array)
// Métodos: entrar, próximo, imprimir

class Fila<T> {
  private fila: Array<T>
  constructor(...args: T[]) {
    this.fila = args
  }
  entrar(elemento: T) {
    this.fila.push(elemento)
  }
  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0]
      this.fila.splice(0, 1)
      return primeiro
    } else {
      return null
    }
  }
  imprimir() {
    console.log(this.fila)
  }
}

const fila = new Fila<string>('Gui', 'Pedro', 'Ana', 'Lu')
fila.imprimir()
fila.entrar('Rafael')
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
fila.imprimir()
