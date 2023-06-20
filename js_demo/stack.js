// 执行栈  stack 
function printName(){
    console.log('ppx');
}

function findName(){
    return printName(); 
}

function sayName(){
    return findName()
}

sayName(); // ppx