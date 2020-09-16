import {getRounded} from '@writetome51/get-rounded-up-down';
import {getWithDecimalShifted} from '@writetome51/get-with-decimal-shifted';


// To round to a digit further to the left, set it to a negative number.
// Example:  getRoundedToPrecision(123.19955, -2); // returns 100
// Example:  getRoundedToPrecision(12.19955, 4); // returns 12.1996

export function getRoundedToPrecision(numberToRound, positionRelativeToDecimal) {

	let numberWithDecimalShifted = getWithDecimalShifted(numberToRound, positionRelativeToDecimal);

	let roundedNumber = getRounded(numberWithDecimalShifted);

	return getWithDecimalShifted(roundedNumber, -positionRelativeToDecimal);
}
