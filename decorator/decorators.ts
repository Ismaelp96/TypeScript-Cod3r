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
// Criando um Decorator
// @logarClasse
// @logarClasseSe(false)
// @decorator({ a: 'Teste', b: 123 })
@LogarObjeto
class Eletrodomestico {
  constructor() {
    console.log('Novo...')
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
new Eletrodomestico()
