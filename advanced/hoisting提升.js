// 1)var function 会导致 提示到顶部 

// console.log(getValue()); // 666
// console.log(str); // undefined
// // console.log(st1); // ReferenceError: Cannot access 'st1' before initialization
// // console.log(getValue2());// TypeError: getValue2 is not a function 
// console.log(getValue2); // undefined

// var str = 'Hello'
// const st1 = 'new'
// function getValue(){
//     return 666
// }

// // var getValue2  会被提升到顶部  --> var getValue2 = undefined
// var getValue2 = function(){ 
//     return 777
// }

// 2) var 变量 
// one  = undefined
var one  = 1
var one = 2 

console.log(one); // 2

// 3) 函数
// fn a(){} 提升到顶部 
function a(){
    console.log(333);
}

function a(){
    console.log(777);
}

a() // 777


