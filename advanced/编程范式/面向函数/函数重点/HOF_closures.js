// higher order function 高阶函数  传递函数 / 返回函数 
const hof = () => () => 666
const hof2 = (fn) => fn(999)

console.log(hof2(function (x) {return x})); // 999


// closure 闭包 内部可以访问外部变量  外部不能修改内部
const closure = function(){
    let count = 0 

    // return function increment(){
    //     count ++
    //    console.log(count);
    // }

    return function getCounter(){
        console.log(count);
    }
}

// const increment = closure()
// increment() // 1
// increment() // 2
// increment() // 3

const getCounter = closure()
getCounter() // 0