
// let obj = {}
// let other = ''

// // Object.defineProperty 定义属性 可以增加拦截器 
// // 默认不可枚举  比如 函数的原型 Array.prototype 这种
// Object.defineProperty(obj,'name',{
//     enumerable:true, // 枚举 遍历
//     configurable:true, // 能不能删除
//     // writable:true,  // 能不能 改写值
    
//     get(){  // get set 和 writable: true 不能同时存在  会报错
//         return other 
//     },
//     set(val){
//         other = val
//     }
// })

// // for(let key in obj){
// //     console.log(key) // 加了 enumerable:true, 后可打印出 key --> name 没加时打印不出内容
// // }

// // 没有加这个 删除不掉 configurable:true,加了之后 obj.nam = undefined 被成功删除
// // delete obj['name']  

// obj.name = 'ppx' // ppx
// console.log(obj.name) // jack  

// console.log(obj)  // {}

// obj.name = 666  // 设置值 调用的是 set 方法
// console.log(obj.name) // 666  读 值 调用的是 get 方法

// let obj = {
//     other: '123',
//     get name(){
//         return this.other
//     },
//     set(val){
//         this.other = val
//     }
// }

// obj.other = '666'
// console.log(obj.other)


// 数据劫持 
function observe(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return observeArray(obj);
    }
  
    return observeObject(obj);
  }
  
  function observeObject(obj) {
    return new Proxy(obj, {
      get(target, key) {
        console.log('访问属性:', key, target[key]);
        return observe(target[key]);
      },
      set(target, key, value) {
        console.log('修改属性:', key, value);
        target[key] = value;
        return true;
      }
    });
  }
  
  function observeArray(arr) {
    const arrayProto = Array.prototype;
    const arrayMethods = Object.create(arrayProto);
  
    ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method => {
      const originalMethod = arrayProto[method];
  
      arrayMethods[method] = function(...args) {
        console.log('调用数组方法:', method);
        const result = originalMethod.apply(this, args);
        // 触发更新操作
        return result;
      };
    });
  
    return new Proxy(arr, {
      get(target, key) {
        if (typeof key === 'string' && key in arrayMethods) {
          return arrayMethods[key];
        }
        return observe(target[key]);
      },
      set(target, key, value) {
        console.log('修改属性:', key, value);
        target[key] = value;
        // 触发更新操作
        return true;
      }
    });
  }
  
  const data = {
    name: 'ppx',
    age: 19,
    address: {
      location: '广州'
    },
    hobbies: ['reading', 'running']
  };
  
  const observedData = observe(data);
  
  observedData.name; // 访问属性: name ppx
  observedData.name = 'ppa'; // 修改属性: name ppa
  
  observedData.address.location; // 访问属性: address {location: "广州"}
  observedData.address.location = '上海'; // 修改属性: location 上海
  
  observedData.hobbies.push('swimming'); // 调用数组方法: push
  

  Vue.prototype.$set = function(obj, key, callback) {
    Object.defineProperty(obj, key, {
        get: callback
    })
  } 