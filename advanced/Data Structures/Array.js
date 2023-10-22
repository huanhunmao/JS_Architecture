// Array 

const array = ['a', 'b', 'c','d']

// push  return number
array.push('eee')  // O(1)

// pop  return del string 
array.pop()  // O(1)
const res = array.pop()
console.log(res); // d 

// splice  return undefined
array.splice(2, 0, '666') // O(n)  主要原因 就是 index 会变化 需要 便利一遍数组 


// unshift return number
const res1 = array.unshift('fffff')  // O(n)
console.log(res1);


array.shift()  // O(1)

console.log(array);