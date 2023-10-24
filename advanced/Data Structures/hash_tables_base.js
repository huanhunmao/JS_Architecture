//  提供了快速的插入、删除和查找操作。在 JavaScript 中，我们通常使用对象（Object）或者 Map 来实现哈希表的功能

// 1 使用 obj 创建 
// let hashTable = {}

// // 插入键值对
// hashTable['name'] = 'ppx'
// hashTable['age'] = 18

// // 查找
// console.log(hashTable['name']); // ppx

// // 删除 
// delete hashTable['name'];
// console.log(hashTable['name']); // undefined

// // 检查某个键是否存在
// console.log('name' in hashTable); // false
// console.log('age' in hashTable); // true


// 1-1 使用 Map
let hashTable = new Map();

// 插入键值对
hashTable.set('name', 'ppx')
hashTable.set('age', 25)

// 查找 
console.log(hashTable.get('name')); // ppx

// 删除
hashTable.delete('name')
console.log(hashTable.get('name')); // undefined

// 检查是否存在
console.log(hashTable.has('name')); // false
console.log(hashTable.has('age')); // true