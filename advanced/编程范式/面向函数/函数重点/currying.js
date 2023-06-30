// 非 currying
const multiply = (a,b) => a * b;
console.log(multiply(3,4)); // 12


// currying function
const curriedMultiply =  (a) => (b) => a * b;
const curriedMultiplyBy6 = curriedMultiply(6)
console.log(curriedMultiplyBy6); // [Function (anonymous)]

// 10 years later
console.log(curriedMultiplyBy6(9)); // 54
console.log(curriedMultiplyBy6(9)); // 54
console.log(curriedMultiplyBy6(9)); // 54