//import { NotImplementedError } from '../extensions/index.js';

export default function createDreamTeam(members) {
	//let members = ['att', 123, 'nn', 'dmitry', 'max'];
	let arr = [], 
			fl = [], 
			k = 0;
	if(typeof members != null){
	for(let i = 0; i < members.length; i++){
		if (typeof members[i] == 'string' ){
			let letters = members[i].split('');
			fl[k] = letters[0].toUpperCase();
			k++;
		} 
	}
	
// console.log(fl.sort().join(''));
	let q = fl.sort().join('');
	return q;
	//return typeof q == 'string' ?  q : false;
} else {
	return false;
}




  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
