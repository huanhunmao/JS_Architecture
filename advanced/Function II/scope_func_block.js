// function scope vs block scope 
// 1) function test(){
//     var secret = '123'
// }

// //  ReferenceError: secret is not defined
// console.log('secret',secret); // 因为存在函数作用域导致 外部无法放文到 这个变量


// 2)更改为 if 语句
// if(3> 2){
//     var secret = '123'
// }

// console.log('secret',secret); // secret 123  if 没有块作用域效果 


// 3) 如何产生 块作用域效果？ let / const 
if(3 > 2){
    // let secret = '123'
    const secret = '123'
}

console.log('secret',secret); // ReferenceError: secret is not defined
