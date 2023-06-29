// // 1) 先写个 非 pure func 
// const arr = [1,2,3]
// // function changeArray(){
// //     arr.pop()
// // }
// // changeArray()
// // console.log('arr',arr); // arr [ 1, 2 ] 更改了原数据产生了副作用 


// // 怎么变成 pure func ? 
// function pureChangeArray(){
//     const newArray = [...arr] // 函数内部 定义局部变量 不影响其他的内容 和 原来的数据 非常棒
//     newArray.pop()

//     return newArray
// }
// const newArray = pureChangeArray()
// console.log('newArray',newArray); // newArray [ 1, 2 ]

// console.log('arr',arr); // arr [ 1, 2, 3 ]





// 2) 再来一个 非 pure func
// const arr = [1,2,3]

// function loopArray(arr){
//      arr.forEach(() => arr.push(777))

//      return arr
// }

// loopArray(arr)
// console.log('arr', arr); // arr [ 1, 2, 3, 777, 777, 777 ]


// 如何变成 pure func ?
const  arr = [1,2,3]
function loopPureArray(){
    // const newArray = [...arr] 
    // or
    const newArray = [].concat(arr)
    newArray.forEach(() => newArray.push(777))
    return newArray
}

const newArray = loopPureArray(arr)
console.log('newArray', newArray); // newArray [ 1, 2, 3, 777, 777, 777 ]
console.log('arr', arr); // arr [ 1, 2, 3 ]