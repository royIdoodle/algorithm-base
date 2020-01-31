/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let list = Array.from(s);
  list = list.filter(char => /\w/.test(char))
  let reversedList = [...list].reverse();
  
  return list.every((char, index) => {
    return char.toLowerCase() === reversedList[index].toLowerCase();
  })
};

console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))