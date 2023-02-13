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
