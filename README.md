# getRoundedToPrecision(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;positionRelativeToDecimal<br>): number

To round to the nearest one, set positionRelativeToDecimal to zero.  
To round to a digit further to the left, set it to a negative number.  
Example:  getRoundedToPrecision(123.19955, -2); // returns 100  
Example:  getRoundedToPrecision(12.19955, 4); // returns 12.1996