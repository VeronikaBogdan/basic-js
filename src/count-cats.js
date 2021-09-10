export default function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let k = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      matrix[i][j] == '^^' ? k++ : k;
    }
  }
  return k;
}
