import { NotImplementedError } from '../extensions/index.js';
export default function getSumOfDigits(n) {
	// let n = 123;
  // let arr = String(n).split('');
  // console.log(typeof(arr));
	// console.log(arr);
  // let sum;


	// while(arr.length != 1){
	// 	sum = 0;
	// 	for(let value in arr){
	// 		sum += +arr[value];
	// 		console.log(typeof(+arr[value]));
	// 	}
	// }


  // while(arr.length != 1){
  //   sum = 0;
  //   for(let i = 0; i < arr.length; i++){
  //     sum += +arr[i];
  //   }
  //   sum.length>1 ? arr = [...sum] : sum = +sum;
  // }
  // return sum;

  throw new NotImplementedError('Not implemented');
  //remove line with error and write your code here
}

// assert.strictEqual(getSumOfDigits(91), 1);
// assert.strictEqual(getSumOfDigits(100), 1);
// assert.strictEqual(getSumOfDigits(35), 8);
// assert.strictEqual(getSumOfDigits(99), 9);
// assert.strictEqual(getSumOfDigits(123), 6);