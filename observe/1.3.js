let activeUpdate


class Dep {
  constructor () {
    this.subcribers = new Set();
  }
  
  depend () {
    if (activeUpdate) {
      this.subcribers.add(activeUpdate)
    }
  }
  
  notify () {
    this.subcribers.forEach(sub => sub())
  }
}

let dep = new Dep()

function convert (obj) {
  Object.keys(obj).forEach(key => {
    let intervalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        console.log(`key[${key}] is depend`, activeUpdate)
        dep.depend()
        return intervalValue
      },
      set (newValue) {
        intervalValue = newValue
        dep.notify()
      }
    })
  })
  
}

function autorun (update) {
  function wrappedUpdate () {
    activeUpdate = wrappedUpdate
    dep.depend()
    update()
    activeUpdate = null
  }
  wrappedUpdate()
}

const state = {
  count: 0,
  times: 1
}

convert(state)

autorun(() => {
  console.log('autorun', state.count)
})

// state.count++
state.times++
state.times++
state.times++


function parsePath (obj, path) {
  if (path.indexOf('.') < 0) {
    return obj[path]
  } else {
    let keys = path.split('.')
    let obj = {}
    console.log(keys)
    keys.forEach(key => {
      console.log({key})
      obj = obj[key]
    })
    return obj
  }
}

let obj = {
  a: 'bar',
  b: {
    c: {
      d: 'foo'
    }
  }
}

console.log('-------------')

console.log(parsePath(obj, 'a'))
console.log(parsePath(obj, 'b.c.d'))
console.log('-------------')
