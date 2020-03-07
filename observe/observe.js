function convert (obj) {
  Object.keys(obj).forEach(key => {
    let intervalValue = obj[key]
    Object.defineProperty(obj, key, {
      get () {
        console.log(`getting key ${key} : ${intervalValue}`)
        return intervalValue
      },
      set (newValue) {
        console.log(`setting key ${key} : ${newValue}`)
        intervalValue = newValue
      }
    })
  })
  
}

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

function autorun (update) {
  function wrappedUpdate () {
    activeUpdate = wrappedUpdate
    update()
    activeUpdate = null
  }
  wrappedUpdate()
}


let obj = {
  firstName: 'wang',
  lastName: 'chong'
}

convert(obj)

console.log(obj)

