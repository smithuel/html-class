// for(initialization; condition; increment/decrement ) {
//   body
// }

// print "Hello" five times


console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// i++ is same as i = i + 1
// i-- is same as i = i - 1
// i*=1 i = i * 1


for(let i = 0; i < 5; i++){
  logger("i = " + i)
}
// for(let i = 1; i <= 5; i++){
//   logger("Hello")
// }

// for(let i = 5; i >= 1; i--){
//   logger("Hello")
// }

// for(let i = 5; i > 0; i--){
//   logger("Hello")
// }

// 1: i will be declared and initialized to 0
// 2: the condition will be evaluated i < 5 
// 3: if the condition is true, console.log("Hello") will be executed
// 4: the value of i will be increased by 1
// 5: the computer will jump to step 2 and continue to 4
// 6: while in step 2, if the condition is false, the loop is terminated 

// initialization
// while (condition) {
//   body
//   increment/decrement
// }

logger('Executing while loop')
{
  let i = 0;
  while (i < 5) {
    logger('i = ' + i);
    i++;
  }
}

{
  let i = 5;
  while (i > 0) {
    logger('i = ' + i);
    i--;
  }
  logger('The loop stopped when i = ' + i);
}

{
  logger('Multiplication Table 2 * n while n <= 24');
  let i = 1;
  let table = '<table width="20%"><tbody>'
  while ( i <= 24) {
    const result = 2 * i;
    const output = `2 * ${i} = ${result}` //Backtick allows interpolation
    logger(output);
    table += `<tr><td>2</td><td>*</td><td>${i}</td><td>=</td><td>${result}</td></tr>`;
    i++;
  };
  table += '</tbody></table>';
  const outputEl = document.getElementById("multiplicationTable");
  outputEl.innerHTML = table;


}
