// noEmitOnError -> não emite o arquivo JS quando ocorre um erro no TS
let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)
// let nome = 'Pedro'
//# SourceMap=compilador.js.map
// noImplicitAny
function soma(a: any, b: any) {
  return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'
