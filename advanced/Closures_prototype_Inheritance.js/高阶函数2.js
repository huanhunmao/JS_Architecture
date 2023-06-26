//展示一个例子  multiplyBy
// error 
// const multiply = function (a,b){
//     return a * b;
// }
// function multiplyBy(a,b,fn){
//     console.log(fn(a,b)); 
// }

// multiplyBy(2,3,multiply) // 6

// good code 
const multiply = function(num1){
    return function(num2){
        console.log(num1 * num2); 
    }
}

const multiplyTwo = multiply(2)
const multiplySix = multiply(6)
multiplyTwo(3) // 6 
multiplySix(9) // 54
