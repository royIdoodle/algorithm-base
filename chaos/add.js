function addFn(...args) {
  return args.reduce((pre, cur) => (pre + cur), 0)
}


function curry(fn) {
  const argsList = []
  return function curryFn(...args) {
    if (args.length > 0) {
      argsList.push(...args)
      return curryFn
    } else {
      return fn(...argsList)
    }
  }
}

const add = curry(addFn)

console.log(add(1,2)(3)(4)())
