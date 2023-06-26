// 小心 函数被多次初始化 
// 1) error  循环 多次 被初始化多次 
// for(let i  = 0; i < 5; i++) {
//     function a(){
//         // doSomething();
//     }
// }

// // good 可多次调用 不要多次 初始化/定义
// function a(){// doSomething()}
// for(let i = 0; i < 5; i++) {
//     a()
// }

// 给参数初始值 
// 1) error 
function a (){
    return param
}

console.log(a());  // ReferenceError: param is not defined

// 2) good 
function a (param = 0){
    return param
}

console.log(a()); // param