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
