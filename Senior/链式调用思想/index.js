// 链式调用是通过在对象上的方法返回对象自身（this）来实现的

var Calculator = function (initialValue) {
    this.result = initialValue || 0; // this1 Calculator { result: 10 }

    console.log('this1',this);
    
    this.add = function (x) {
      this.result += x;
      return this;  // 返回对象自身
    };
    
    this.subtract = function (x) {
      this.result -= x;
      return this;  // 返回对象自身
    };
    
    this.multiply = function (x) {
      this.result *= x;
      return this;  // 返回对象自身
    };
    
    this.divide = function (x) {
      this.result /= x;
      return this;  // 返回对象自身
    };
    
    this.getResult = function () {
      return this.result;
    };

    console.log('this2',this);
    // this2 Calculator {
    //     result: 10,
    //     add: [Function (anonymous)],
    //     subtract: [Function (anonymous)],
    //     multiply: [Function (anonymous)],
    //     divide: [Function (anonymous)],
    //     getResult: [Function (anonymous)]
    //   }
  };
  
  // 链式调用
  var result = new Calculator(10)
    .add(5)
    .multiply(2)
    .subtract(4)
    .divide(2)
    .getResult();
  
  console.log(result);  // 输出：13
  