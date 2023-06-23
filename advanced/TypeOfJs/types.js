// typeof 

// 基本类型 Primitive --> 明确的值 
// console.log(typeof 5);
// console.log(typeof '5');
// console.log(typeof true);
// console.log(typeof  Symbol('this'));
// console.log(typeof(undefined));
// console.log(typeof(null)); // object

// // Non-Primitive 引用类型 --> 指针指向引用地址 
// console.log(typeof(function(){})); // function
// console.log(typeof []); // object
// console.log(typeof {}); // object

// function is object ? 
// function test(){
//    return 'test'
// }

// test.hello = 'ccc'
// console.log('test', test); // [Function: test] { hello: 'ccc' }

// // 和这样写等价 ？ 
// function test2(){
//     function innerFunc(){
//         return 'test'
//     }

//     innerFunc.hello = 'ccc2'

//     return innerFunc
// }
// console.log('test2', test2()); // test2 [Function: innerFunc] { hello: 'ccc2' }

// array 
// let arr = [1,2,3]
// arr.name = 'ppx'
// console.log('arr', arr); //  arr [ 1, 2, 3, name: 'ppx' ]

// Why number is Object ? 
// 首先被包装为 Boolean(true)  --> 然后 Boolean(true).toString()
console.log(true.toString()); // 'true'
