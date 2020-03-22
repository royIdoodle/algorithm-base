function debounce (fn, delay) {
  let timer = null
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }
}

function throttle (fn, time = 200) {
  let valid = true
  return function () {
    if (!valid) {
      return
    } else {
      setTimeout(() => {
        fn()
        valid = true
      }, time)
    }
  }
}
