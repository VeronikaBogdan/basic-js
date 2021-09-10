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
	

	let q = fl.sort().join('');
	return q;

} else {
	return false;
}


}
