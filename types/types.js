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
