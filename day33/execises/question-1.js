function maximum(arr) {
  if (arr.length === 0) return -1;

  let max = Number.NEGATIVE_INFINITY;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  return max;
}

console.log(maximum([]));

console.log(maximum([2,50, 1000, 78, 100000, 80*100000]))
console.log(maximum([1,2,3,4,5]))
console.log(maximum([-1, -2,-3,-4, -5]))
console.log(maximum([-2,-3,-4, -5]))