import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { getCautiouslyRounded } from '@writetome51/get-cautiously-rounded/getCautiouslyRounded';
import { getWithDecimalShifted } from '@writetome51/get-with-decimal-shifted/getWithDecimalShifted';


// numDigitsToRoundTo refers to number of places to right or left of decimal that it
// should round to.  To round to a digit left of the decimal, set it to negative number.
// Example:  getRoundedToPrecision(-2, 123.19955); // returns 100
// Example:  getRoundedToPrecision(4, 12.19955); // returns 12.1996

export function getRoundedToPrecision(numDigitsToRoundTo, numberToRound) {
	errorIfNotInteger(numDigitsToRoundTo);
	errorIfNotNumber(numberToRound);
	let numberWithDecimalShifted = getWithDecimalShifted(numDigitsToRoundTo, numberToRound);
	let roundedNumber = getCautiouslyRounded(numberWithDecimalShifted);
	return getWithDecimalShifted(-numDigitsToRoundTo, roundedNumber);
}
