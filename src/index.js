
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const n = matrix[i].length;
    for (let j = 0; j < n; j++) {
      i % 2 === 0
        ? res.push(matrix[i][j])
        : res.push(matrix[i][n - j - 1])
    }
  }
  return res;
}

