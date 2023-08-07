// huanhunmao

// 1) 模块化
// users.js
// export function getUserList(){

// }

// // main.js
// import {getUserList} from '../users.js'

// getUserList()


// go
// advanced nodejs 
// java


// 2) use const 

// let count = 0 
// const count = 0
// const PI = 3.141592653589793


// 3) 避免全局污染 

// bad 
// let globalVar = 'I am a global variable'

// function getGlobal(){
//     ///
// }

// // best 
// (function(){
// let globalVar = 'I am a global variable'

// function getGlobal(){
//     ///
// }

// }())

// 4)  use arrow functions
// bad
// function sum(a,b){
//     return a + b;
// }

// // best
// const sum = (a,b)  => a + b;

// 5) 善用 es6 ...  
// bad 
// user.firstName
// user.lastName

// best
// const {firstName, lastName} = user

// // 数组
// const arr = [1,2,3]
// const arr2 = [4,5,6] 
// const combinedArr = [...arr, ...arr2]

// // template literals
// const name = `My name is ${firstName} ${lastName}`

// 6)  CSS classes instead of inline CSS classes
// bad 
{/* <button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button>
<button style="color:red, background-color:pink"></button> */}

<button class="primary-btn test"></button>

// .primary-btn{
//     xxxx
// }