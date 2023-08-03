// ********************* 一些练习 *********************
// 1)
// let name = "John";

// function sayHi() { // 使用新的值 如果 name 没有更改 就是 John
//   console.log("Hi, " + name);  // Hi, Pete
// }

// name = "Pete";

// sayHi();

// 2)
// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       console.log(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); // Pete

// 3)
// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   // 这两个是对 原函数 不同的调用
//   // So they have independent outer Lexical Environments, each one has its own count.
//   let counter = makeCounter();
//   let counter2 = makeCounter(); 
  
//   console.log(( counter() )); // 0
//   console.log(( counter() )); // 1
  
//   console.log(( counter2() )) // 0
//   console.log(( counter2() )) // 1

// 4）
// function Counter() {
//     // Both nested functions are created within the same outer Lexical Environment,(相同的外部词汇环境)
//     //  so they share access to the same count variable:
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
//   console.log(( counter.up() )); // 1
//   console.log(( counter.up() )); // 2
//   console.log(( counter.down() )); // 1

// 5)
// "use strict";
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log((`${phrase}, ${user}`));
//   }
// }

// sayHi(); // ReferenceError: sayHi is not defined

// 6) achieve like sum(a)(b) = a+b.
// function sum(a){
//     return function(b){
//         return a + b 
//     }
// }

// console.log(sum(1)(2)); // 3 
// console.log(sum(5)(-1)); // 4

// 7)
// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func(); // ReferenceError: Cannot access 'x' before initialization

// 8) Filter through function 
// arr.filter(inBetween(3, 6));输出：[3, 4, 5, 6]

// function inBetween(min, max){
//     return function(item){
//         return item >=min && item <= max
//     }
// }
  
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   let filteredArr = arr.filter(inBetween(3, 6))
  
//   console.log(filteredArr); // [ 3, 4, 5, 6 ]


// //   next
// function inArray(arr){
//     return function(item){
//         // 找到两个数组共有的数组
//         return arr.includes(item);
//     }
// }

// console.log(( arr.filter(inArray([1, 2, 10])) )); // [ 1, 2 ]

// 9）简化排序  不然需要写两次 类似的东西 
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function byField(fieldName){
//     return (a,b) => a[fieldName] > b[fieldName] ? 1 : -1
// }

//   console.log(users.sort(byField('name')));
//   console.log(users.sort(byField('age')));

// 10）
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
        // 闭包会捕获其所在上下文中的变量，而不是复制变量的值，当 shooter 函数被调用时，它会使用 i 的当前值，而不是在创建 shooter 函数时的值
      let shooter = (function(index) { // create a new scope by using an IIFE
        return function() {
         console.log(index); // use the captured index value
        };
      })(i);
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // 0
  army[1](); // 1
  army[2](); // 2