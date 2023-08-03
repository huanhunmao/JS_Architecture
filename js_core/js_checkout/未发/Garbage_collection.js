// 垃圾回收  （前提是存在闭包）
// value 不会被清理掉   g.[[Environment]] 存储了对函数的引用
function f() {
    let value = 123;
  
    return function() {
      alert(value);
    }
  }
  
  let g = f(); // g.[[Environment]] stores a reference to the Lexical Environment
  // of the corresponding f() call

  // 多次调用一个函数 结果会被保存在 内存中 
function getRandomValue() {
    let value = Math.random();

    return function() {
        console.log(value);
    }
}

let arr = [getRandomValue(), getRandomValue(), getRandomValue()]
arr[0]()
arr[1]()
arr[2]()
// 0.9917880339424707
// 0.24580154029525114
// 0.23673498610835897


// 闭包清除 
function fc(){
    let value = 123

    return function(){
        return value
    }
}

let cc = fc() // while cc function exists, the value stays in memory

cc = null // ...and now the memory is cleaned up