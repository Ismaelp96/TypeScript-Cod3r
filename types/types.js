"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 28 não aceita troca de tipo
// numbers
let idade = 27;
// idade = 'Lorena' não aceita troca de tipo
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1 está errado mas aparece no console
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// array
let hobbies = ['cozinhar', 'praticar esportes'];
console.log(hobbies[1]);
console.log(typeof hobbies);
hobbies = [100, 200, 300, 'esportes'];
// hobbies = 100
console.log(hobbies);
// tuplas
let endereco = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua Importante', 1260, 'Bloco C'];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amerelo"] = 12] = "Amerelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amerelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019,
    Cavalos: 300,
};
console.log(carro);
// funções
function retornarMeuNome() {
    return nome;
    //   return minhaIdade
}
console.log(retornarMeuNome());
function digaOi() {
    console.log('Oi');
    //   return minhaIdade
}
digaOi();
function multiplicar(NumA, NumB) {
    return NumA * NumB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9));
// tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
    nome: 'João',
    idade: 27,
};
console.log(usuario);
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal!';
        }
        else {
            return 'Fora do horário!';
        }
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal!';
        }
        else {
            return 'Fora do horário!';
        }
    },
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(10));
console.log(funcionario2.baterPonto(7));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
// nota = true
// Checando tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('É um number');
}
else {
    console.log(typeof valor);
}
// Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0)
            falha('Precisa ter um nome');
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    },
};
produto.validarProduto();
// Valores Opcionais com Tipo "Null"
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null,
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // assumiu o tipo any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432'],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=types.js.map