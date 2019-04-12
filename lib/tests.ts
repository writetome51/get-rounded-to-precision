import { getRoundedToPrecision } from './index';


console.log(getRoundedToPrecision(123.19955, -2)); // 100

console.log(getRoundedToPrecision(123.19955, -1)); // 120

console.log(getRoundedToPrecision(123.19955, 0)); // 123

console.log(getRoundedToPrecision(123.19955, 1)); // 123.2

console.log(getRoundedToPrecision(123.19955, 2)); // 123.2

console.log(getRoundedToPrecision(123.19955, 3)); // 123.2

console.log(getRoundedToPrecision(123.19955, 4)); // 123.1996

console.log(getRoundedToPrecision(123.1288545, 6)); // 123.128854

console.log(getRoundedToPrecision(123.1288555, 6)); // 123.128856

console.log(getRoundedToPrecision(123.128855, 8)); // 123.128855
