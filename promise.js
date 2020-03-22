const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class $Promise {
  constructor (executor) {
    this.value = null
    this.state = PENDING
    this.reason = null
    this.fulfilledCallbacks = []
    this.rejectedCallbacks = []
    
    try {
      executor(resolve, reject)
    } catch (reason) {
      this.reason = reason
      asyncExecute(() => {
        reject(reason)
      })
    }
    
    
    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        this.fulfilledCallbacks.forEach(fn => {
          asyncExecute(() => {
            fn(this.value)
          })
        })
      }
    }
    
    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.rejectedCallbacks.forEach(fn => {
          asyncExecute(() => {
            fn(this.reason)
          })
        })
      }
    }
  }
  
  then (onFulfilledCallback, onRejectedCallback) {
    return new $Promise((resolve, reject) => {
      if (this.state === PENDING) {
        this.fulfilledCallbacks.push(function (value) {
          resolveNext(onFulfilledCallback, value, resolve, reject)
        })
        this.rejectedCallbacks.push(function (reason) {
          resolveNext(onRejectedCallback, reason, resolve, reject)
        })
      } else if (this.state === FULFILLED) {
        resolveNext(onFulfilledCallback, this.value, resolve, reject)
      } else if (this.state === REJECTED) {
        resolveNext(onRejectedCallback, this.reason, resolve, reject)
      }
    })
  }
  
  catch (onRejectedCallback) {
    return new $Promise((resolve, reject) => {
      if (this.state === PENDING) {
        this.rejectedCallbacks.push(function (reason) {
          resolveNext(onRejectedCallback, reason, resolve, reject)
        })
      } else if (this.state === REJECTED) {
        resolveNext(onRejectedCallback, this.reason, resolve, reject)
      }
    })
  }
}

function resolveNext (callback, value, resolve, reject) {
  if (typeof callback === 'function') {
    try {
      const returnValue = callback(value)
      if (returnValue instanceof $Promise) {
        returnValue.then(resolve, reject)
      } else {
        resolve(value)
      }
    } catch (reason) {
      reject(reason)
    }
  } else {
    resolve(callback)
  }
}

function asyncExecute (fn) {
  let count = 1
  let textNode = document.createTextNode(String(count))
  let mu = new MutationObserver(() => {
    fn()
  })
  
  mu.observe(textNode, {
    characterData: true
  })
  counter = (counter + 1) % 2
  textNode.data = String(counter)
}
