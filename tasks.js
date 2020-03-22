Function.prototype.myCall = function(context, ...args) {
  // 判断是否是undefined和null
  if (typeof context === 'undefined' || context === null) {
    context = window
  }
  let fnSymbol = Symbol()
  context[fnSymbol] = this
  let fn = context[fnSymbol] (...args)
  delete context[fnSymbol]
  return fn
}

function sayHelloTo (to) {
  console.log(`${this.name} say hello to ${to}`)
}

var Jerry = {
  name: 'Jerry'
}
// sayHelloTo.call(Jerry, 'Tom')
//Jerry say hello to Tom.

sayHelloTo.myCall(Jerry, 'Tom')
