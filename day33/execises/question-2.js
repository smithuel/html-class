function sort(arr, order) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      const condition = order === 'asc' ? arr[j] > arr[j+1] : arr[j] < arr[j+1]
      if(condition) {
          const temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp 
      }
    }
  }
  return arr;
}

console.log(sort([2, 5, 1, 4, 3], 'asc'))
console.log(sort([2, 5, 1, 4, 3], 'desc'))