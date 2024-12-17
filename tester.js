function countCats(matrix) {
  matrix.reduce((acc, curr) => {
    const count = curr.filter(item => item === '^^').length;
    return acc + count;
  }, 0);
}

console.log(countCats([
  ['##', 'dd', '00'],
  ['^^', '..', 'ss'],
  ['AA', 'dd', 'Oo'],
]))
