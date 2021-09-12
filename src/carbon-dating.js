const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample( sampleActivity ) {
  

// 	const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;
// 	let sampleActivity = '2.3333333';
	if(typeof sampleActivity != 'string' /*|| !Number.isInteger(+sampleActivity)*/) {
		return false;
		// console.log(false);
	} else
	{
		let k = 0.693 / HALF_LIFE_PERIOD;
		return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
		// console.log(Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k));
	}

}
