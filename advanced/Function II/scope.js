// 展示 作用域链 
let name = 'ppx'
function sayName(){
    const a = 'a'
    return function findName(){
        const b = 'b'
        console.log('c',c); // ReferenceError: c is not defined  不能拿到内层的变量
        return function printName(){
            const c = 'c'
            console.log('b',b); // b   可以拿到外层作用域内的变量 
            console.log('a',a); // a
            console.log('name',name) // name ppx 可以拿到全局的 变量(不区分 var let/const)
            return 'inner printName'
        }
    }
}

// console.log(sayName()); // [Function: findName]
// console.log(sayName()()); // [Function: printName]
console.log(sayName()()()); // inner printName