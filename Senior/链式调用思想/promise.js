function asyncOperation(value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });
  }
  
  // 链式调用
  asyncOperation(10)
    .then(result => {
      console.log(result);  // 输出：10
      return result + 5;
    })
    .then(result => {
      console.log(result);  // 输出：15
      return result * 2;
    })
    .then(result => {
      console.log(result);  // 输出：30
    })
    .catch(error => {
      console.error(error);
    });
  