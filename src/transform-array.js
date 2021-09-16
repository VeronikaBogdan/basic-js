export default function transform(arr) {
	if (Array.isArray(arr)){
		//let arr = [1, 2, '2', 4, 5];
		let na = [...arr];
		let k = 0;
		if (arr.every(i => Number.isInteger(i))) {
			return arr;
			console.log(arr);
		} 
		else
		 {
			 
			

			if((arr[0]== '--discard-prev' || arr[0]=='--double-prev') /*&& arr.length>2*/) {arr.shift(); na.shift();}
			if(arr[arr.length-1]== '--double-next' || arr[arr.length-1]=='--discard-next') {arr.pop();na.pop();}

			for(let i = 0; i < arr.length; i++){     // ТАК ДОЛЖНО БЫТЬ
				if(arr[i-1]=='--discard-next' && arr[i+1]=='--discard-next') {na=arr; break;}


				if(arr[i-1]=='--discard-prev'){
					na = arr.slice(k,arr[i-3]);
					k=arr[i]
					na = [...arr.slice(k,arr.length)]
				}
				if(arr[i-1]=='--discard-next'){
					na = arr.slice(k,arr[i-2]);
					k=arr[i];
					na = [...arr.slice(k,arr.length)]
				}
				if(arr[i-1]=='--double-next'){
					arr[i-1] = arr[i];
					na = arr;
				}
				if(arr[i-1]=='--double-prev'){
					arr[i-1] = arr[i];
					na = arr;
				}
			}
			console.log(na);
			return na;
		}
	} 
	else 
	{		
		// console.log('\'arr\' parameter must be an instance of the Array!');
		// return '\'arr\' parameter must be an instance of the Array!';
		throw new Error('\'arr\' parameter must be an instance of the Array!')	;	
	}

}