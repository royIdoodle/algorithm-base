class RVue {
  constructor (options = {}) {
    this.$data = options.data || {}
    this.observe(this.$data)
    
    new Compiler(options.el, this)
    
  //   created生命周期执行
    if (typeof options.created === 'function') {
      options.created.call(this)
    }
  }
  
  observe (obj) {
    if (!obj || typeof obj !== 'object') {
      return
    }
    
    Object.keys(obj).forEach(key => {
      this.defineReactive(obj, key, obj[key])
      this.proxyData(key)
    })
  }
  
  defineReactive (obj, key, val) {
    this.observe(val)
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      get () {
        Dep.target && dep.addDep(Dep.target)
        return val
      },
      set (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        dep.notify()
        console.log(`key[${key}] has new value [${newVal}]`)
      }
    })
  }
  
  proxyData(key) {
    Object.defineProperty(this, key, {
      get () {
        return this.$data[key]
      },
      set (v) {
        this.$data[key] = v
      }
    })
  }
}

class Watcher {
  constructor (vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    Dep.target = this
    this.vm[key]
    Dep.target = null
  }
  update () {
    console.log('属性更新')
    this.cb.call(this.vm, this.vm[this.key])
  }
}

class Dep {
  constructor () {
    this.deps = new Set()
  }
  addDep (dep) {
    this.deps.add(dep)
  }
  notify () {
    console.log('in notify', this.deps.size)
    this.deps.forEach(dep => dep.update())
  }
}

Dep.target = null

