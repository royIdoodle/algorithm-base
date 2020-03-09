/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle[triangle.length - 1].length === 1) {
    return triangle[0][0]
  }
  triangle.forEach((list, height) => {
    list.forEach((n, i) => {
      if (height === 0) {
        triangle[height][i] = triangle[height][i]
      } else if (i === 0) {
        triangle[height][i] = triangle[height][i] + triangle[height - 1][0]
      } else if (i === list.length - 1) {
        triangle[height][i] = triangle[height][i] + triangle[height - 1][i - 1]
      } else {
        triangle[height][i] = triangle[height][i] + Math.min(triangle[height - 1][i], triangle[height - 1][i - 1])
      }
    })
  })
  return Math.min(...triangle[triangle.length - 1])
};

/*
const tr = [
      [2],
    [3, 4],
   [6, 5, 7],
  [4, 1, 8, 3]
]*/

const tr = [[-10]]

console.log(minimumTotal(tr))
