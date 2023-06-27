// 模拟实现模块化 
const calculator = (function(){
    let result = 0 

    function add(number){
        result += number
    }

    function subtract(number){
        result -= number
    }

    function getResult(){
        console.log(result);
    }

    return {
        add,
        subtract,
        getResult
    }
})()

calculator.add(10)
calculator.getResult() // 10
calculator.subtract(7)
calculator.getResult() // 3

// 使用立即执行函数创建了一个闭包，其中包含了 add、subtract 和 getResult 函数，它们都可以访问和修改 result 变量
// 将这些函数作为模块的接口返回，可以在外部使用这些接口，而不会直接暴露内部的实现细节