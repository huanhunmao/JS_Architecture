// // 先写一个 compose 
// const compose = (fn1, fn2) => data => fn1(fn2(data)) // data 来自外部 -6 ， 先执行 fn1(data) 作为参数 传给 fn2 -》 fn2()
// const multiplyBy6 = num => num * 6
// const makeAbsolute = num => Math.abs(num)
// const multiplyAndAbsolute = compose(multiplyBy6, makeAbsolute)

// const res = multiplyAndAbsolute(-6)
// console.log('res',res);  // res 36



// fn1(fn2(fn3(data)))
// compose(fn1, fn2, fn3)(data) // 从后往前执行 
// pipe(fn3, fn2, fn1)(data) // 从前往后执行 


// pipe 
// const compose = (fn1, fn2) => data => fn1(fn2(data)) // data 来自外部 -6 ， 先执行 fn1(data) 作为参数 传给 fn2 -》 fn2()
const pipe = (fn1, fn2) => data => fn2(fn1(data)) // data
const multiplyBy6 = num => num * 6
const makeAbsolute = num => Math.abs(num)
const multiplyAndAbsolute = pipe(multiplyBy6, makeAbsolute)

const res = multiplyAndAbsolute(-6)
console.log('res',res);  // res 36
