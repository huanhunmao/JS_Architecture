// function expression 表达式
// const getValue = () => {
//     console.log('object');
// }

// // function declaration 定义
// function getValue2(){
//     console.log('object2');
// }

// getValue() // object
// getValue2() // object2

// 1） arguments  is object {xx:xxx}
// function married(p1, p2){
//     console.log('arguments',arguments); // arguments [Arguments] { '0': 'Marxu', '1': 'Ppx' }
//     console.log(`${p1} married to ${p2}`); // Marxu married to Ppx
// }

// console.log('arguments',arguments); // 打印 global 的 arguments 

// married('Marxu','Ppx')

// 2） arguments ...
// function married(...args){
//     console.log('arguments',args); // arguments [ 'Marxu', 'Ppx' ] or use Array.from(arguments)
//     console.log(`${args[0]} married to ${args[1]}`); // Marxu married to Ppx
// }

// married('Marxu','Ppx')

// 3) arguments default
function get(){
    console.log('arguments',arguments);
}
get() // arguments [Arguments] {}