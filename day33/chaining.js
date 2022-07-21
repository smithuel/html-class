const arr = [1, 3, 2, 5, 7, 8, 10, 15, -1, 13]
const squared = arr.map(item => item * item)
const even = squared.filter(item => item % 2 === 0)
console.log(squared)
console.log(even)

const even2 = arr.map(item => item * item).filter(item => item % 2 === 0)
console.log(even2);