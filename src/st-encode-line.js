export default function encodeLine(str) {
	let arr = str.split(''),
			na = '',
			k = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i+1] == arr[i]){
			k++;
		} else {
			k != 0 ? na += `${k+1}` + arr[i] : na +=arr[i];
			arr.slice(arr[i+1], arr.length);
			k=0;
		}
	}
	console.log(na);
		return na;
}
