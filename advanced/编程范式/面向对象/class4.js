// 1) class 内变量和 func 私有化 
class MyClass {
    constructor() {
      this._privateVar = 42; // 私有变量
    }
  
    _privateMethod() { // 私有方法
      console.log('This is a private method.');
    }
  
    publicMethod() {
      this._privateMethod(); // 在公有方法中调用私有方法
      console.log('This is a public method.');
    }
  }
  
  const obj = new MyClass();
  obj.publicMethod(); // 输出: This is a private method.
                      //        This is a public method.

// 2) 闭包 
class Counter {
    constructor() {
      let count = 0; // 私有变量
  
      this.increment = function() {
        count++;
        console.log(count);
      };
    }
  }
  
  const counter = new Counter();
  counter.increment(); // 输出: 1
  counter.increment(); // 输出: 2

  console.log(counter.count); // undefined 拿不到 这个


// 3) #xxx 
class MyClass1 {
    #privateVar = 42; // 私有变量
    constructor() {
    }
  
    #privateMethod() { // 私有方法
      console.log('This is a private method.');
    }
  
    publicMethod() {
        console.log('#privateVar',this.#privateVar); // #privateVar 42
      this.#privateMethod(); // 在公有方法中调用私有方法
      console.log('This is a public method.');
    }
  }
  
  const obj1 = new MyClass1();
  obj1.publicMethod(); // This is a private method.       This is a public method.
//   console.log('#privateVar', #privateVar); // error
// console.log('#privateMethod',#privateMethod); // error