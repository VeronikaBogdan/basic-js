const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample( sampleActivity ) {
  
	if(typeof sampleActivity != 'string'/*|| !Number.isInteger(+sampleActivity)*/|| MODERN_ACTIVITY>15 || +sampleActivity<=0 ) {
		return false;
		// console.log(false);
	} else
	{
		// let k = 0.693/HALF_LIFE_PERIOD;
		return Math.abs(Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)));
		// console.log(Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k));
	}

}
