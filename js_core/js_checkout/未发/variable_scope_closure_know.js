// ********************* 一些知识点 *********************

// 1) 块内的声明 外面不能用 
// For if, for, while and so on, variables declared in {...} are also only visible inside:
// {
//     let message = 'hello'

//     console.log(message); // hello
// }

// console.log(message); // ReferenceError: message is not defined


// if (true) {
//     let phrase = "Hello!";
  
//    console.log(phrase); // Hello!
//   }
  
//   console.log(phrase) // ReferenceError: message is not defined


// 2) Nested functions 嵌套函数
//  It can access the outer variables and so can return the full name
// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     console.log( "Hello, " + getFullName() ); // Hello, ppx acc
//     console.log("Bye, " + getFullName() ); // Bye, ppx acc
  
//   }

//   sayHiBye('ppx','acc')

// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
  
// console.log(counter());// 0
// console.log(counter());// 1
// console.log(counter());// 2

// 3)-1 Lexical Environment 词汇环境 
let phrase = 'Hello,'
console.log('phrase: ' + phrase); // outer -> null


// 未声明时，execution start ，phrase: <uninitialized> --> outer --> null
// let ppx  //  phrase: undefined
// let ppx = 'acc' // phrase: acc
// let ppx = 'pkc' // phrase: pkc


// 3)-2 函数声明后可直接使用  内层词法环境找不到则向外寻找
// The difference is that a Function Declaration is instantly fully initialized.(完全初始化)

// phrase: <uninitialized> and say: function  --> outer -->  null
let t1 = 'fake'
function say(){
    console.log('say something');
}

//3)-3 Inner and outer Lexical Environment
// name:'John' --> outer --> to:'outer' and get:function --> outer --> null
let to = 'outer'
function get(name){
    console.log(`${to},${name}`);
}

get('John')


// 3)-4 Returning a function
// counter: 0 --> outer --> getCounter:function  and  val: undefined --> outer --> null
function getCounter(){
    let counter = 0

    return function(){
        return counter ++
    }
}

const val = getCounter()

// 再来一个 
// 内层函数 <empty> --> empty --> outer -> counter:0 --> outer --> getCounter:function and val1:function --> outer --> null
function getCounter(){
    let counter = 0

    return function(){
        return counter ++
    }
}

const val1 = getCounter()
alert(val1)