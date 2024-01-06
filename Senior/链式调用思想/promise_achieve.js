// promise 使用 then 链式调用 则需要 搞清楚 then 如何实现的 

class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onFulfilledCallbacks = [];
      this.onRejectedCallbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onFulfilledCallbacks.forEach(callback => callback(this.value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach(callback => callback(this.reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      const newPromise = new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
          // 如果当前Promise已经成功，则异步执行onFulfilled回调
          setTimeout(() => {
            try {
              const result = onFulfilled ? onFulfilled(this.value) : this.value;
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        } else if (this.state === 'rejected') {
          // 如果当前Promise已经失败，则异步执行onRejected回调
          setTimeout(() => {
            try {
              const result = onRejected ? onRejected(this.reason) : this.reason;
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        } else if (this.state === 'pending') {
          // 如果当前Promise还处于pending状态，则将回调函数保存起来
          this.onFulfilledCallbacks.push((value) => {
            setTimeout(() => {
              try {
                const result = onFulfilled ? onFulfilled(value) : value;
                resolve(result);
              } catch (error) {
                reject(error);
              }
            }, 0);
          });
  
          this.onRejectedCallbacks.push((reason) => {
            setTimeout(() => {
              try {
                const result = onRejected ? onRejected(reason) : reason;
                resolve(result);
              } catch (error) {
                reject(error);
              }
            }, 0);
          });
        }
      });
  
      return newPromise;
    }
  }
  
  // 示例用法
  const promise = new MyPromise((resolve) => {
    setTimeout(() => {
      resolve(42);
    }, 1000);
  });
  
  promise
    .then(value => {
      console.log(value);  // 输出：42
      return value + 10;
    })
    .then(value => {
      console.log(value);  // 输出：52
    });
  