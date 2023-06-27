// 闭包的基本内容  
// 函数执行完成本来函数作用域内的变量和内容都会被销毁 
// 但由于 c 形成了 闭包 会保留 引用的变量 grandpa 和 father 导致不会回收掉 
// 闭包 形成也是 由于 函数链条 [[Scope]] 相连接 有关
function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return (`${grandpa} > ${father} > ${son}`);
        }
    }
}

console.log(a()); // [Function: b]
console.log(a()()); // [Function: c]
console.log(a()()()); // grandpa > father > son