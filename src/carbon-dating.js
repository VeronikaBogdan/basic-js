const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

export default function dateSample( sampleActivity ) {
	if( isNaN(sampleActivity) || typeof sampleActivity != 'string' || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY ) {
		return false;
	} 
	return Math.abs(Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)));
}
