// 1 数组去重 Set
// const  array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(array)]
// console.log(uniqueArray); // [ 1, 2, 3, 4, 5 ]

// 如何使用 Map 去重 ？
// const  array = [1, 2, 2, 3, 4, 4, 5];
// function uniqueObjectsWithMap(arr){
//     let uniqueMap = new Map();
//     return arr.filter(item => {
//         // JSON.stringify将对象转为字符串作为键来检查重复
//         return !uniqueMap.has(JSON.stringify(item)) && uniqueMap.set(JSON.stringify(item), true)
//     })
// } 

// console.log(uniqueObjectsWithMap(array)); // [ 1, 2, 3, 4, 5 ]

// 2 快速查找  利用哈希表进行快速查找是否存在某个元素
// const data = ["apple", "banana", "cherry"];
// const hashTable = new Map(data.map(item => [item, true]))
// console.log(hashTable); // Map(3) { 'apple' => true, 'banana' => true, 'cherry' => true }
// console.log(hashTable.has('apple')); // true
// console.log(hashTable.has('grape')); // false

// 3 实现关联数组 
// const users = new Map();
// const obj1 = {name: 'ppx', age: 18}
// const obj2 = {name:'clg',age: 28}

// users.set(1, obj1)
// users.set(2, obj2)

// console.log(users.get(2)); // { name: 'clg', age: 28 }

// 4 简单的实现一个函数缓存，这里以斐波那契数列为例
const cache = new Map()

function fib(n){
    if(cache.has(n)){
        return cache.get(n)
    }

    if(n <= 1) return n 

    const result = fib(n - 1) + fib(n - 2)
    cache.set(n, result)
    return result
}

console.log(fib(10));
console.log(fib(10));
console.log(fib(10));
console.log(fib(2));