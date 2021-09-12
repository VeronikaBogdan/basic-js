export default function repeater(str, options) {
	let q = '';

	if(typeof str != 'string') str=str+'' /*options[str] = str*/;
	if(typeof options.addition != 'string') options.addition=options.addition+'' /*options.addition=String(options.addition)*/;
	
	!options.separator ? options.separator = '+' : options.separator;
	!options.additionSeparator ? options.additionSeparator = '|': options.additionSeparator ;


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

	return q;
	console.log(q);
}
