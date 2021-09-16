import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr)  {
		// let k = 1;
		// //let arr = [1, [1,2,[]], 3, [[]], 5];
		// console.log(arr.map(i => Array.isArray(i), k++)); //arr.map(i => Array.isArray(i), k++)
		// console.log(k);


		// let na = arr.map(i => Array.isArray(i));
		// for(let i = 0; i<na.length; i++){
		// 	if (na[i]==true) {
		// 		k++;

		// 	}
		// }
		// return k;


    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
