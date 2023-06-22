// block js 
function loopValue(){
    for(var i = 0; i < 5; i ++){
        console.log(i); // 0 1 2 3 4 
    }
    console.log('final result', i ); // final result 5
}

loopValue()


// use let 
function loopValue(){
    for(let i = 0; i < 5; i ++){ // 形成了 {xxxx} 内的块级作用域 外部无法访问
        console.log(i); // 0 1 2 3 4 
    }
    console.log('final result', i ); // ReferenceError: i is not defined
}

loopValue()
