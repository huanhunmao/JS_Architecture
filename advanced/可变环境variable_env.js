//  可变环境 每个执行上下文都有自己的 可变环境
function test1(){
    var isValid
}

function test2(){
    var isValid = true 
    test1()
}

var isValid = false
test2()

