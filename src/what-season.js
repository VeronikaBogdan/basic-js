export default function getSeason(date) {

	if (!date) return 'Unable to determine the time of year!';
	if ((date instanceof Date) === false) throw new Error('Invalid date!');

  const arrTime = ['winter', 'spring', 'summer', 'fall']; //autumn == fall

	 try 
	 {
	  date.toDateString(); 
		let month = date.getMonth() + 1;

		return month >= 3 && month <= 5 ? arrTime[1] : 
					 month >= 6 && month <= 8 ? arrTime[2] : 
					 month >= 9 && month <= 11 ? arrTime[3] : arrTime[0];
	} 
	catch (error) {
	  throw new Error('Invalid date!');
	}

}
