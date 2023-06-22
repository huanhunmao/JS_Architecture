// 奇怪的 js 
// 1） 不声明 直接写 ， 使用 use strict 可以解决
// 'use strict'
// function weird(){
//     value = 999
//     console.log(value); // 999 / ReferenceError: value is not defined
// }

// weird()

// 2) 直接调用函数表达式后面的函数  
// 后面这个 function 有自己的 作用域  test 函数 不是挂在全局上
const heyhey = function test(){
    console.log('heyhey');
}

heyhey() // heyhey
test() // ReferenceError: test is not defined