// js 执行堆栈
function printName() {
    console.log('ppx fu');
}

function findName(){
    return printName()
}

function sayName(){
    return findName()
}

sayName() // ppx fu