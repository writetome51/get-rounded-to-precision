"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var get_cautiously_rounded_1 = require("@writetome51/get-cautiously-rounded");
var get_with_decimal_shifted_1 = require("@writetome51/get-with-decimal-shifted");
// To round to the nearest one, set positionRelativeToDecimal to zero.  
// To round to a digit further to the left, set it to a negative number.
// Example:  getRoundedToPrecision(123.19955, -2); // returns 100
// Example:  getRoundedToPrecision(12.19955, 4); // returns 12.1996
function getRoundedToPrecision(numberToRound, positionRelativeToDecimal) {
    errorIfNotNumber_1.errorIfNotNumber(numberToRound);
    errorIfNotInteger_1.errorIfNotInteger(positionRelativeToDecimal);
    var numberWithDecimalShifted = get_with_decimal_shifted_1.getWithDecimalShifted(numberToRound, positionRelativeToDecimal);
    var roundedNumber = get_cautiously_rounded_1.getCautiouslyRounded(numberWithDecimalShifted);
    return get_with_decimal_shifted_1.getWithDecimalShifted(roundedNumber, -positionRelativeToDecimal);
}
exports.getRoundedToPrecision = getRoundedToPrecision;