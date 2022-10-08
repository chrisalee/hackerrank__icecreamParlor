/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

function icecreamParlor(m, arr) {
  for(let i = 0; i < arr.length - 1; i++){       
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] + arr[i] === m){
        return [i+1, j+1];
      }
    }
  }
}
