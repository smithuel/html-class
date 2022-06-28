// const balance = 500000;
// const amount = 50000;

// if ( condition ) {
//   //execute this block if condition is true
// }
// [else {

// }]

/* 
< less than 
> greater than 
<= less than or equal to
>= greater than or equal to 
== equal to (not strict)
=== equal to (strict) 
*/

if (amount > balance) {
  console.log('Insufficient fund');
} else {
  logger('Please wait....')
}

function max(x , y) {
  if (x > y) return x;

  return y;
}

function min(x , y) {
  if (x > y) return y;

  return x;
}

logger(max(50, 55))
logger(max(500, 55))

logger('Minimum of the numbers')
logger(min(50, 55))
logger(min(500, 55))

if (5 > 7) {
  logger('5 is higher than 7');
} else if(7 > 5) {
  logger('7 is higher than 5');
}

switch (9 > 7) {
  case true:
    logger('Yes');
    break;
  case false: 
    logger('No')
    break;
}