// 1) js 变量或者 对象 / 函数 命名 都由引擎分配一个空间 
// const number = 123
// const str = 'ppx'
// const obj = {
//     name:'ppx',
//     age: 18
// }

// 2) 去浏览器 看看 call stack 执行时调用堆栈 
// function subtractNum(num){
//     return num  - 3
// }

// function add(){
//     const sum = 3 + 4
//     return subtractNum(sum)
//  }

//  add()

// 3) 垃圾回收 
function test(){
    var user = {}
}

// test() 执行完成 函数销毁  变量 user 销毁