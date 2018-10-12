"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var getCautiouslyRounded_1 = require("@writetome51/get-cautiously-rounded/getCautiouslyRounded");
var getWithDecimalShifted_1 = require("@writetome51/get-with-decimal-shifted/getWithDecimalShifted");
// numDigitsToRoundTo refers to number of places to right or left of decimal that it should round to. 
// To round to the nearest one, set it to zero.  To round to a digit further to the left, set it to a negative number.
// Example:  getRoundedToPrecision(-2, 123.19955); // returns 100
// Example:  getRoundedToPrecision(4, 12.19955); // returns 12.1996
function getRoundedToPrecision(numDigitsToRoundTo, numberToRound) {
    errorIfNotInteger_1.errorIfNotInteger(numDigitsToRoundTo);
    errorIfNotNumber_1.errorIfNotNumber(numberToRound);
    var numberWithDecimalShifted = getWithDecimalShifted_1.getWithDecimalShifted(numDigitsToRoundTo, numberToRound);
    var roundedNumber = getCautiouslyRounded_1.getCautiouslyRounded(numberWithDecimalShifted);
    return getWithDecimalShifted_1.getWithDecimalShifted(-numDigitsToRoundTo, roundedNumber);
}
exports.getRoundedToPrecision = getRoundedToPrecision;
