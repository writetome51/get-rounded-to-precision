getRoundedToPrecision(numDigitsToRoundTo, numberToRound);

numDigitsToRoundTo refers to number of places to right or left of decimal that it
should round to.  To round to a digit left of the decimal, set it to negative number.

Example:  getRoundedToPrecision(-2, 123.19955); // returns 100

Example:  getRoundedToPrecision(4, 12.19955); // returns 12.1996