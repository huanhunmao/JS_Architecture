// // 1） 基本类型 值传递  互相不影响  只是简单的赋值操作 
// let a = 123 
// let b = a 

// console.log('a',a); // a 123
// console.log('b',b); // a 123

// a = 999
// b = 666
// console.log('a',a); // a 999
// console.log('b',b); // a 666


// // 2） 引用类型  指向同一个地址  一个改变 则都会改变 
// let obj1 = {
//     name: 'ppx',
//     password: '123'
// }
// let obj2 = obj1

// obj2.password = '999'

// console.log(obj1); // { name: 'ppx', password: '999' }
// console.log(obj2); // { name: 'ppx', password: '999' }

// // 2-1） 数组也是一样的 
// let c = [1,2,3,4]
// let d = c 

// console.log(c); //  [1,2,3,4]
// console.log(d); //  [1,2,3,4]

// d.name = 'ppx'
// console.log(c); // [ 1, 2, 3, 4, name: 'ppx' ]
// console.log(d); // [ 1, 2, 3, 4, name: 'ppx' ]

// // 2-2) 浅层拷贝 只能拷贝一层  Object.assign({}, obj)  / {...obj}
// let obj3 = {
//     a:'a',
//     b:'b',
// }
// let clone  = Object.assign({},obj3)
// let clone1 = {...obj3}

// obj3.c = 'c'

// console.log('obj3',obj3); // obj3 { a: 'a', b: 'b', c: 'c' }
// console.log('clone',clone); // clone { a: 'a', b: 'b' } 并未受到影响
// console.log('clone1',clone1); // clone1 { a: 'a', b: 'b' }


// 2-3 如果深层怎么办 
// let obj4 = {
//     a:'a',
//     b:'b',
//     deep:{
//         c:'c',
//     }
// }

// let clone3 = {...obj4}

// // obj4.deep = 'xxx' // 如果这样 浅拷贝还是有效的 因为还是单层
// obj4.deep.c = 'deep deep'

// console.log(obj4); // { a: 'a', b: 'b', deep: 'deep deep' }
// console.log(clone3); // { a: 'a', b: 'b', deep: { c: 'deep deep' } }

// 2-4 解决 深拷贝问题 
let obj5 = {
    a:'a',
    b:'b',
    deep:{
        c:'c',
    }
}

let clone4 = JSON.parse(JSON.stringify(obj5))
obj5.deep.c = 'deep deep'

console.log(obj5); // { a: 'a', b: 'b', deep: { c: 'deep deep' } }
console.log(clone4); // { a: 'a', b: 'b', deep: { c: 'c' } }
