class Compiler {
  constructor (el, vm) {
    this.$el = document.querySelector(el)
    this.$vm = vm
    if (this.$el) {
      this.$framgment = this.node2Fragment(this.$el)
      console.log(this.$framgment)
      this.compile(this.$framgment)
      this.$el.appendChild(this.$framgment)
    }
  }
  
  node2Fragment (el) {
    let frag = document.createDocumentFragment()
    let child
    while (child = el.firstChild) {
      frag.appendChild(child)
    }
    return frag
  }
  
  
  compile (el) {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        // console.log(`编译元素 ${node.nodeName}`)
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach(attr => {
          const attrName = attr.name
          const exp = attr.value
          if (this.isDirective(attrName)) {
            const dir = attrName.substring(2)
            this[dir + 'Updater'] && this[dir + 'Updater'](node, this.$vm, exp)
          }
          
          if (this.isEvent(attrName)) {
          
          }
        })
      } else if (this.isInterpolation(node)) {
        // console.log(`编译文本 ${node.textContent} ${RegExp.$1}`)
        this.compileText(node)
      }
      
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }
  
  isDirective (attr) {
    return attr.indexOf('v-') === 0
  }
  
  isEvent (attr) {
    return attr.indexOf('@') === 0
  }
  
  isElement (node) {
    return node.nodeType === 1
  }
  
  isInterpolation (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  
  }
  
  text(node, vm, exp) {
    this.textUpdater(ndoe, vm, exp, 'text')
  }
  
  compileText (node) {
    // node.textContent = this.$vm.$data[RegExp.$1]
    this.update(node, this.$vm, RegExp.$1, 'text')
  }
  
  update (node, vm, exp, dir) {
    const updateFn = this[dir + 'Updater']
    updateFn && updateFn(node, vm.$data[exp])
    new Watcher(vm, exp, function (value) {
      updateFn && updateFn(node, value)
    })
  }
  
  textUpdater (node, value) {
    node.textContent = value
  }
}
