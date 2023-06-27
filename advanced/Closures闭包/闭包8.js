// 问题
// const arr = [1,2,3,4]
// for(var i = 0 ; i < arr.length ; i ++){
//     setTimeout(function(){
//         console.log('I am at index', i);
//     },3000)
// }

// 重复 4次 I am at index 4


// // 1） 使用 let 创建了作用域 {xxxx} 每个 i 都创建了 一个作用域
// const arr = [1,2,3,4]
// for(let i = 0 ; i < arr.length ; i ++){
//     setTimeout(function(){
//         console.log('I am at index', i);
//     },3000)
// }

// I am at index 0
// VM202:4 I am at index 1
// VM202:4 I am at index 2
// VM202:4 I am at index 3

// 2) 使用闭包  立即执行函数，将 i 保存在 闭包内 并 作为参数 传递给这个闭包 使用这个参数
const arr = [1,2,3,4]
for(var i = 0 ; i < arr.length ; i ++){
    (function(closureI){
        setTimeout(function(){
            console.log('I am at index', closureI);
        },3000)
    })(i)
}

// I am at index 0
// I am at index 1
// I am at index 2
// I am at index 3