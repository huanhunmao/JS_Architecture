// First Class Citizens 头等公民 

// 1) 可 赋给 变量 
const stuff  = function (){}

// 2) 可 作为参数传递 
const fn = function (){
    console.log('I am fn')
}

function a (fn){
     fn()
}

a(fn) // I am fn

// 3) 可作为返回值 返回 
function b (){
    return function(){
        console.log('I can return ');
    }
}

b()() // I can return 