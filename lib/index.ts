import { getCautiouslyRounded } from '@writetome51/get-cautiously-rounded';
import { getWithDecimalShifted } from '@writetome51/get-with-decimal-shifted';


// To round to the nearest one, set positionRelativeToDecimal to zero.  
// To round to a digit further to the left, set it to a negative number.
// Example:  getRoundedToPrecision(123.19955, -2); // returns 100
// Example:  getRoundedToPrecision(12.19955, 4); // returns 12.1996

export function getRoundedToPrecision(numberToRound, positionRelativeToDecimal) {

	let numberWithDecimalShifted = getWithDecimalShifted(numberToRound, positionRelativeToDecimal);

	let roundedNumber = getCautiouslyRounded(numberWithDecimalShifted);

	return getWithDecimalShifted(roundedNumber, -positionRelativeToDecimal);
}
