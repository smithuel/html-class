function logger(v) {
  console.log(v);
}

function summation(x, y) {
  const sum = x + y;
  return sum;
}

logger('Summation of 5 and 7')
let result = summation(5, 7);
logger(result)

result = summation(15, 7);
logger(result)

logger(summation(55,23))

function product(x, y) {
  return x * y
}

const h = product(10,3);
logger(h);

logger(product(70,70))
logger(product(7,70))

// Named function
function sum(x, y){
  logger(x + y)
}
//Anonymous function
const sum2 = function (x, y){
  return x + y
}
// Arrow function
const sum3 = (x, y) => {
  return x + y
}

sum(5, 12)
logger(sum2(5, 12))
logger(sum3(5, 12))