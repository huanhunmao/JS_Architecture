// 箭头函数简写  
// const getTotal = function (x){
//     return function (y){
//         console.log(x + y);
//     }
// }

// getTotal(2)(3) // 5

// // 简化
// const getTotal1 = x => {
//     return y => console.log(x + y)
// }

// getTotal1(2)(3) // 5

// 再简化 
const getTotal2 = x => y => x + y

getTotal2(3)(4) // 7