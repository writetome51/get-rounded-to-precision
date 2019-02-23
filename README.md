# getRoundedToPrecision(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;positionRelativeToDecimal<br>): number

Returns `num` rounded to `positionRelativeToDecimal`.    
To round to a position on the left of the decimal, set it to a negative number.  
To round to a position on the right of the decimal, set it to a positive number.  
Its algorithm prevents cumulative rounding errors.


## Examples
```
getRoundedToPrecision(123.1, -2); // --> 100

getRoundedToPrecision(123.1, -1); // --> 120

getRoundedToPrecision(123.1, 0); // --> 123

getRoundedToPrecision(123.199, 2); // --> 123.2

getRoundedToPrecision(123.19955, 4); // --> 123.1996

getRoundedToPrecision(1.8545, 3); // --> 1.854

getRoundedToPrecision(1.8555, 3); // --> 1.856
```

## Installation
`npm i @writetome51/get-rounded-to-precision`

## Loading
```
// if using TypeScript:
import {getRoundedToPrecision} from '@writetome51/get-rounded-to-precision';

// if using ES5 JavaScript:
var getRoundedToPrecision = 
    require('@writetome51/get-rounded-to-precision').getRoundedToPrecision;
```