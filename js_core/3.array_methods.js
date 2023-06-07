// proxy  Object.defineProperty 不能监听数组变化

// function update(){
//     console.log('update')
// }

// let arr = [1,2,3]

// let proxy  = new Proxy(arr, {
//     set(target, key, value){
//         // 不要手动操作数组 数组变化可能调用的是 push 或 pop
//         console.log('target', target) // [ 1, 2, 3 ]  ->  [ 1, 2, 3, 4 ]
//         console.log('key: ' , key) // key: 3 ->  key: length
//         console.log('value: ' , value) // value: 4
//         if(key === 'length') return true
//         update()
//         return Reflect.set(target,key,value)
//     },
//     get(target, key){
//         return Reflect.get(target,key)
//     }
// })

// proxy.push(4)


// reduce 最简单形式 

// let res = [1,2].reduce((a,b) => {
//     return a + b 
// })
// console.log('res',res)  // res 3

// // 复杂点 
// const items = [
//     {
//         price:10,
//         count:1
//     },
//     {
//         price:20,
//         count:2
//     },
//     {
//         price:30,
//         count:3
//     }
// ]
// let total = items.reduce((a,b) => { // 0 指定数组内第一项 b 表示 a 的 后一项
//     return a  + b.price * b.count  
// },0)

// console.log('total', total) // total 140

// // 筛选数组/ 拍平 数组 (只能拍平一层 )
// const arr = [[1,2],[3,4],[5,6]]

// const flat = arr.reduce((a,b) =>{
//     return a.concat(b)
// },[])

// console.log('flat', flat) // flat flat [ 1, 2, 3, 4, 5, 6 ]


// // 再来一个 分组的例子 
// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 },
//     { name: 'Dave', age: 35 }
//   ];

//  const test =  people.reduce((accumulator,currentValue) => {
//     console.log('accumulator',accumulator)
//     // accumulator {
//     //     '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//     //     '30': [ { name: 'Bob', age: 30 } ]
//     //   }
//     console.log('currentValue',currentValue) // currentValue { name: 'Dave', age: 35 }
//     const age = currentValue.age
//     if(accumulator[age]){
//         accumulator[age].push(currentValue)
//     }else{
//         accumulator[age] = [currentValue]
//     }

//     return accumulator
//   },{})
// console.log('test',test)
// test {
//     '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//     '30': [ { name: 'Bob', age: 30 } ],
//     '35': [ { name: 'Dave', age: 35 } ]
//   }


// reduce 常见功能  多个数据 最终变成一个数据 
// let keys = ['name','age']
// let values = ['ppx',18]

// let obj = keys.reduce((result, key, index) => {
//     console.log('result',result)
//     // result {}
//     // result { name: 'ppx' }
//     result[key] = values[index]
//     console.log('result',result)
//     // result { name: 'ppx' }
//     // result { name: 'ppx', age: 18 }

//     return result
// },{})

// console.log('obj',obj) // obj { name: 'ppx', age: 18 }


// 使用 for 循环的方式 
// let keys = ['name', 'age'];
// let values = ['ppx', 18];

// let mergedObject = {};

// for(let i = 0; i < keys.length; i ++){
//     let key = keys[i]
//     let value = values[i]
//     mergedObject[key] = value
// }

// console.log('mergedObject',mergedObject) // mergedObject { name: 'ppx', age: 18 }



// reduce 实现 redux compose
function sum(a,b){
    return  a + b
}

function toUpperCase(str){
    return str.toUpperCase()
}

function addLogo(str){
    return '****' + str
}

// const result =  addLogo(toUpperCase(sum('ppx','cc')))
// console.log('result', result) // result ****PPXCC

// 如何使用 reduce 优雅一点 

// function compose(...fns){
//     return function (...args){
//         let lastFn = fns.pop()
//         console.log('lastFn',lastFn) // lastFn [Function: sum]
//         return fns.reduceRight((a,b) => {
//             return b(a)  // b是addLogo后一个  拿到前一个toUpperCase结果当参数 传入
//         },lastFn(...args))
//     }
// }
// const result1 = compose(addLogo, toUpperCase, sum)('ppx','aa')
// console.log('result1', result1) // result1 ****PPXAA

// // reduce 正向写法 
// function  compose(...fns){
//     return fns.reduce((a,b) => {
//         return (...args) => {
//             return a(b(...args))
//         }
//     })
// }

// const result2 = compose(addLogo, toUpperCase, sum)('ppx','aa')
// console.log('result2',result2) // result2 ****PPXAA

// 实现 reduce 
// Array.prototype.reduceMy = function (callback, prev){
//     for(let i = 0 ; i < this.length; i ++){
//         if(prev == undefined){
//             prev = callback(this[i], this[i+1],i+1, this)
//             i ++
//         }else{ // 如果 prev 存在 就将它作为 入参 继续计算 
//             prev  = callback(prev, this[i] , i , this)
//         }
//     }

//     return prev
// }

// let res = [1,2,3].reduceMy((a,b,index, current) => {
//     return a + b
// },100)

// console.log('res', res) // res 6 // 106 如果 后面给个初始值100


// 其他常用方法
const res1 = [1,2,3].map(item => item * 2) 
console.log('res1',res1)

const res2 = [1,2,3,4].filter(item => item === 4)
console.log('res2', res2)  // res2 [ 4 ]

const res3 = [1,2,3,4].some(item => item === 5)
console.log('res3', res3)

const res4 = [1,2,3,4].every(item => item === 3)
console.log('res4', res4)

const res5 = [1,2,3,4].find(item => item === 2)
console.log('res5',res5) // res5 2

const res6 = [1,2,3,4].indexOf(3) > -1
console.log('res6', res6)

const res7 = [1,2,3,4].includes(3)
console.log('res7', res7)