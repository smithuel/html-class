// arithmetic operators *, /, +, -, % 
// relational operators < , >, <=, >=, ==, ===
// logical operators & (AND), && (AND), | (OR), || (OR), ! (NOT) 

function isEven(n) {
  return n % 2 === 0
}

function isOdd(n) {
  return n % 2 > 0
}


logger('Executing operators.js')
logger('calling isEven function')
logger(isEven(8))
logger(isEven(9))
logger('calling isOdd function')
logger(isOdd(9))
logger(isOdd(8))
logger(isOdd(1))

const minimumBalance = 1000;
const amountToWithdraw = 5000;
const balance = 6000;
// only allow withdrawal if the balance is higher than the amount to be withdrawn 
// and after withdrawal, the amount remaining 
// will be equal to or higher than the minimum balance
const newBalance = balance - amountToWithdraw
if ((balance > amountToWithdraw) && (newBalance >= minimumBalance)) {
  logger('Please wait ...')
} else {
  logger('Insufficient fund')
}

/*
70  - 100 A
60 - 69 B
50 - 59 C
40 - 49 D
35 - 39 E
0 - 34 F
*/
const score = +prompt('Enter the score')
let grade ='F';
if (score >= 70 && score <= 100) {
  grade = 'A'
} else if (score >= 60 && score <= 69) {
  grade = 'B'
} else if (score >= 50 && score <= 59) {
  grade = 'C'
} else if (score >= 40 && score <= 49) {
  grade = 'D'
} else if (score >= 34 && score <= 39) {
  grade = 'E'
} else {
  grade = 'F'
}
if (grade == 'A' || grade == 'B') {
  logger('Congratulations! You have earned a scholarship')
}
logger('Finished executing operators.js')