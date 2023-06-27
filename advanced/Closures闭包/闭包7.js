// 练习 如果这是一个页面的初始化 需要调用的函数，如果被多次调用则会多次初始化，非常不利
// let view
// function init(){
//     view = '👀'
//     console.log('view has been initialized');
// }

// init() // view has been initialized
// init() // view has been initialized
// init() // view has been initialized
// console.log(view); // 👀


// 闭包解决 
let view
function init(){
    let hasBeenCalled = 0 
    return function(){
        if(hasBeenCalled > 0){
            return
        }else{
            view = '👀'
            console.log('view has been initialized');
            hasBeenCalled ++
        }
    }
}

const calledOnce = init()
calledOnce() 
calledOnce()
calledOnce()
console.log(view); // view has been initialized 👀 