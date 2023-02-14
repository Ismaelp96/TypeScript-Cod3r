// Criando um Decorator
function logarClasse(construtor: Function) {
  console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

function decorator(obj: { a: string; b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + ' ' + obj.b)
  }
}

// Alterando Construtor com Decorator de Class
type Construtor = { new (...args: any[]): {} }

function LogarObjeto(constructor: Construtor) {
  console.log('Carregado...')
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}
// new Eletrodomestico()

interface Eletrodomestico {
  imprimir?(): void
}

// Adicioando Método com Decorator de Class
// @logarClasse
// @logarClasseSe(false)
// @decorator({ a: 'Teste', b: 123 })
@LogarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('Novo...')
  }
}

function imprimivel(constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this)
  }
}
// (<any>new Eletrodomestico()).imprimir()
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()

// Desafio Decorator perfilAdmin

const usuarioLogado = {
  nome: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true,
}
@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!')
  }
}
new MudancaAdministrativa().critico()

// Resposta
function perfilAdmin<T extends Construtor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args)
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissão!')
      }
    }
  }
}

// Decorator de Método
class ContaCorrent {
  private saldo: number

  constructor(saldo: number) {
    this.saldo = saldo
  }
  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor
      return true
    } else {
      return false
    }
  }
  @congelar
  getSaldo() {
    return this.saldo
  }
}

const cc = new ContaCorrent(10248.57)
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function () {
//   return this['saldo'] + 7000
// }
console.log(cc.getSaldo())

// Object.freeze()

function congelar(
  alvo: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor
) {
  console.log(alvo)
  console.log(nomeMetodo)
  descriptor.writable = false
}
