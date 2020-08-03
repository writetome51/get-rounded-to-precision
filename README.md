# getRoundedToPrecision(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;positionRelativeToDecimal: integer<br>): number

Returns `num` rounded to `positionRelativeToDecimal`.    
To round to a position on the left of the decimal, set it to a negative number.  
To round to a position on the right of the decimal, set it to a positive number.  
Its algorithm prevents cumulative rounding errors.


## Examples
```js
getRoundedToPrecision(123.1, -2); // --> 100

getRoundedToPrecision(123.1, -1); // --> 120

getRoundedToPrecision(123.1, 0); // --> 123

getRoundedToPrecision(123.199, 2); // --> 123.2

getRoundedToPrecision(123.19955, 4); // --> 123.1996

getRoundedToPrecision(1.8545, 3); // --> 1.854

// if `num` is integer, it returns `num` unchanged.
getRoundedToPrecision(1, 2); // -->  1
```

## Installation
`npm i @writetome51/get-rounded-to-precision`

## Loading
```js
import {getRoundedToPrecision} from '@writetome51/get-rounded-to-precision';
```
