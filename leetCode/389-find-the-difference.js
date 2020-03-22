/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const sList = s.split('').sort()
  const tList = t.split('').sort()
  
  for (let i = 0; i < tList.length; i++) {
    if (tList[i] !== sList[i]) {
      return tList[i]
    }
  }
};

var s = 'abcd'
var t = 'bdcea'
console.log(findTheDifference(s, t))

