// aop 1)包装函数 
// function wrapFunction(originalFunction){
//     return function(){
//         console.log('Before function execution');
//         originalFunction.apply(this,arguments);
//         console.log('After function execution');
//     }
// }

// function say(){
//     console.log('say some text');
// }

// sayHello = wrapFunction(say)
// // Before function execution
// // say some text
// // After function execution
// sayHello()


// 2) 方法包装

class MyClass{
    originalMethod(){
        console.log('origin method')
    }
}

function decorateMethod(target,methodName, decorator){
    const originalMethod = target[methodName] // 旧的

    target[methodName] = function(){ // 新的
        decorator.call(this) // 函数执行前 执行

        originalMethod.apply(this,arguments)
    }
}

function beforeMethod(){
    console.log('I am before method');
}

decorateMethod(MyClass.prototype,'originalMethod',beforeMethod)
const obj = new MyClass()
// I am before method
// origin method
obj.originalMethod()