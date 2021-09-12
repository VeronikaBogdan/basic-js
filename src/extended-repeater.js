export default function repeater(str, options) {

	// const options = { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }
	// console.log(options.repeatTimes);
	let q = '';

	if(typeof str != 'string') str=str+'' /*options[str] = str*/;
	if(typeof options.addition != 'string') options.addition=options.addition+'' /*options.addition=String(options.addition)*/;
	
	!options.separator ? options.separator = '+' : options.separator;
	!options.additionSeparator ? options.additionSeparator = '|': options.additionSeparator ;

	// if(options.repeatTimes === undefined && options.additionRepeatTimes === undefined) q=str+addition ;

	for(let i = 0; i < options.repeatTimes; i++){
		q += str;
		if(options.addition) {
			for(let j=0; j<options.additionRepeatTimes; j++){
				j == options.additionRepeatTimes-1 ? q += options.addition : q += options.addition + options.additionSeparator;
			}
			//  i==repeatTimes-1 ? q += 
		}
		i==options.repeatTimes-1 ? q  : q += options.separator;
	}


	return options.repeatTimes == undefined &&options.additionRepeatTimes == undefined ? q=str+options.addition:q;
	// return q;
	console.log(q);
}
