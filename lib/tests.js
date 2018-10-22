"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRoundedToPrecision_1 = require("./getRoundedToPrecision");
console.log(getRoundedToPrecision_1.getRoundedToPrecision(-2, 123.19955)); // 100
console.log(getRoundedToPrecision_1.getRoundedToPrecision(-1, 123.19955)); // 120
console.log(getRoundedToPrecision_1.getRoundedToPrecision(0, 123.19955)); // 123
console.log(getRoundedToPrecision_1.getRoundedToPrecision(1, 123.19955)); // 123.2
console.log(getRoundedToPrecision_1.getRoundedToPrecision(2, 123.19955)); // 123.2
console.log(getRoundedToPrecision_1.getRoundedToPrecision(3, 123.19955)); // 123.2
console.log(getRoundedToPrecision_1.getRoundedToPrecision(4, 123.19955)); // 123.1996
console.log(getRoundedToPrecision_1.getRoundedToPrecision(6, 123.1288545)); // 123.128854
console.log(getRoundedToPrecision_1.getRoundedToPrecision(6, 123.1288555)); // 123.128856
