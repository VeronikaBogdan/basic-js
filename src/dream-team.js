export default function createDreamTeam(members) {
	let fl = [], 
			k = 0;
	if(Array.isArray(members))
	{
	for(let i = 0; i < members.length; i++){
		if (typeof members[i] == 'string' ){
			let a = members[i].trim();
			let letters = a.split('');
			fl[k] = letters[0].toUpperCase();
			k++;
		} 
	}
	return fl.sort().join('');
	} else {
		return false;
	}
}
