var lexicalOrder1 = function(n) {
  let list = Array.from({length: n}).map((i, index) => String(index + 1))
  list.sort()
  return list.map(i => Number(i))
};

var lexicalOrder = function(n) {
  const result = []
  let cur = 1
  Array.from({length: n}).forEach(() => {
    result.push(cur)
    if (cur * 10 < n) {
      cur = cur * 10
    } else if (cur + 1 <= n && (cur + 1) % 10 !== 0) {
      ++cur
    } else {
      while ((cur/10) % 10 === 9) {
        cur = Math.floor(cur / 10)
      }
      cur = Math.floor(cur / 10) + 1
    }
  })
  return result
}

console.log(lexicalOrder(67))