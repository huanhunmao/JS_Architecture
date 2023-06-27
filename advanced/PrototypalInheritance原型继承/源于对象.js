// // function is obj
// const test = function() {}
// console.log('test1',test.__proto__);  // Function test1 ƒ () { [native code] }
// console.log('test2',test.__proto__.__proto__); // Object
// console.log('test2',test.__proto__.__proto__.__proto__) // null 顶端了



// // array is obj 
// const arr = []
// console.log('arr1',arr.__proto__); // Array
// console.log('arr1',arr.__proto__.__proto__);  // Object
// console.log('arr1',arr.__proto__.__proto__.__proto__) // null
// console.log('arr', Array.prototype.__proto__);


// 都可以使用 Object 的方法 比如 toString()
const test1 = function(){return 999}
console.log(test1.toString()); // 'function(){return 999}'
const arr2 = [1,2,3]  
console.log(arr2.toString());  '1,2,3'
