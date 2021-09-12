import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
	// const date = {

	// };
	

	//! if(!date) return 'Unable to determine the time of year!';
	//! if((date instanceof Date) === false) return 'Invalid date!';

  //let date = () => new Date();
  //console.log(date instanceof Date);


  throw new NotImplementedError('Not implemented');
  //remove line with error and write your code here
}
