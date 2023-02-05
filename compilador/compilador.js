"use strict";
// noEmitOnError -> não emite o arquivo JS quando ocorre um erro no TS
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log(`Canal = ${canal}`);
// let nome = 'Pedro'
//# SourceMap=compilador.js.map
// noImplicitAny
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//strictNullChecks, noUnusedParameters e noUnsedLocals
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'boa noite!';
    }
    return saudacao;
}
