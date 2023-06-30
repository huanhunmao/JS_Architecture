// 如果要做 a * b * c  currying 怎么处理 
const multiply = (a) => (b) => (c) => a * b * c
console.log(multiply(3)(4)(5)); // 60


const multiply2 = (a,b,c) => a * b * c
// 局部应用 剩余参数 自己处理怎么做 
const partialMultiply = multiply2.bind(null, 3)
console.log(partialMultiply(4,6)); // 72