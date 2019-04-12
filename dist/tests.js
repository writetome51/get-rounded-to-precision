"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.log(index_1.getRoundedToPrecision(123.19955, -2)); // 100
console.log(index_1.getRoundedToPrecision(123.19955, -1)); // 120
console.log(index_1.getRoundedToPrecision(123.19955, 0)); // 123
console.log(index_1.getRoundedToPrecision(123.19955, 1)); // 123.2
console.log(index_1.getRoundedToPrecision(123.19955, 2)); // 123.2
console.log(index_1.getRoundedToPrecision(123.19955, 3)); // 123.2
console.log(index_1.getRoundedToPrecision(123.19955, 4)); // 123.1996
console.log(index_1.getRoundedToPrecision(123.1288545, 6)); // 123.128854
console.log(index_1.getRoundedToPrecision(123.1288555, 6)); // 123.128856
console.log(index_1.getRoundedToPrecision(123.128855, 8)); // 123.128855
