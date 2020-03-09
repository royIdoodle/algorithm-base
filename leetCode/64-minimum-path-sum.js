/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const height = grid.length
  const width = grid[0].length
  if (width === 1) {
    return grid.reduce((cur, pre) => (cur + pre[0]), 0)
  }
  if (height === 1) {
    return grid[0].reduce((cur, pre) => (cur + pre), 0)
  }
  let min = 0
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      if (j === 0 && i === 0) {
        grid[j][i] = grid[j][i]
      } else if (j === 0) {
        grid[j][i] = grid[j][i] + grid[j][i - 1]
      } else if (i === 0) {
        grid[j][i] = grid[j][i] + grid[j - 1][i]
      } else {
        grid[j][i] = grid[j][i] + Math.min(grid[j][i - 1], grid[j - 1][i])
      }
      min = grid[j][i]
    }
  }
  return min
};

/*
const m = [
  [1,2],
  [1,1]
]*/
/*

const m = [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
*/

const m = [
  [9],
  [1],
  [4],
  [8]
]

console.log(minPathSum(m))
