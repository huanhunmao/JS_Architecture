// 箭头函数 没有 this 没有 arguments 它继承了其父作用域的arguments 对象

// function getName(name) {
//     console.log('arguments', arguments)
// }

// getName('ppx') // arguments [Arguments] { '0': 'ppx' }

// function sum() {
//     const arrowFunc = () => {
//       console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
    
//     arrowFunc();
//   }
  
//   sum(1, 2, 3);
  
// }

// 箭头函数简写 结果只有一行简写 

// let getTotal =  () => {
//     return 99
// }

// // 简写为 
// let getTotal2 = () => 99

// // 但如果是这样的  返回对象怎么做 
// let getTotal3 = () => {total:99}

// console.log('getTotal3', getTotal3()) // getTotal3 undefined

// // 怎么解决这个 ？ 
// let getTotal4 = () => ({total:99}) // 加一个括号
// console.log('getTotal4', getTotal4())  // getTotal4 { total: 99 }


// // 更高级一点的简写 
// let getTotal5 = function (x) {
//     return function (y){
//         return x + y
//     }
// }

// console.log('getTotal5', getTotal5(2)(3)) // getTotal5 5

// // 简写时 
// let getTotal6 = (x) => {
//     return (y) => x + y 
// }

// let getTotal7 = x => y => x + y // 这样就非常简化了 

// console.log('getTotal7', getTotal7(6)(9)) // getTotal7 15


// this 问题 看. 前面是谁  this 就是谁 
// let a = 1 
// let obj =  {
//     a : 2,
//     fn(){
//         console.log(this.a)
//     }
// }

// obj.fn() // 2 this 指向的是  obj

// 里面加一个 setTimeout

// let a = 1 
// let obj =  {
//     a : 2,
//     fn(){ // this = obj
//         setTimeout(function(){console.log(this.a)})  // 里面这个this 指向全局 函数作用域的this会指向全局 
//     }
// }

// obj.fn()

// 解决这个问题 
// let a = 1 
// let obj =  {
//     a : 2,
//     fn(){ 
//         setTimeout(() => console.log(this.a))  // 里面这个this 指向obj  2
//     }
// }

// obj.fn()

// function getName(){
//     console.log('this in function', this) // Window in browser console , Global  in nodejs  console
// }

// getName()

// 还有一种情况 
// let a = 1 
// let obj =  {
//     a : 2,
//     fn:()=>{ // this = obj
//         setTimeout(() => console.log(this.a))  // 里面这个this 指向obj  2
//     }
// }

// obj.fn() // undefined 指向 Window 

