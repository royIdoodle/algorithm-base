function numberFormat(num) {
  return String(num)
    .split('')
    .reverse()
    .join('')
    .replace(/\d{3}/g, s => `${s},`)
    .split('')
    .reverse()
    .join('')
}

console.log(numberFormat(1234567890))
