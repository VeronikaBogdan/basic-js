export default function getSeason(date) {

	if (!date) return 'Unable to determine the time of year!';
	if ((date instanceof Date) === false) throw new Error('Invalid date!');

  const arrSeasons = ['winter', 'spring', 'summer', 'autumn'];


}
