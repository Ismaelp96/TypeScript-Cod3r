"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Criando um Decorator
function logarClasse(construtor) {
    console.log(construtor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
function LogarObjeto(constructor) {
    console.log('Carregado...');
    return class extends constructor {
        constructor(...args) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    };
}
// Adicioando Método com Decorator de Class
// @logarClasse
// @logarClasseSe(false)
// @decorator({ a: 'Teste', b: 123 })
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('Novo...');
    }
};
Eletrodomestico = __decorate([
    LogarObjeto,
    imprimivel
], Eletrodomestico);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true,
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
// Resposta
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissão!');
            }
        }
    };
}
// Decorator de Método
class ContaCorrent {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    congelar
], ContaCorrent.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrent.prototype, "getSaldo", null);
const cc = new ContaCorrent(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());
// cc.getSaldo = function () {
//   return this['saldo'] + 7000
// }
console.log(cc.getSaldo());
// Object.freeze()
function congelar(alvo, nomeMetodo, descriptor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descriptor.writable = false;
}
//# sourceMappingURL=decorators.js.map