
// //  1) 遍历
// function compareIfArrIsEqual(arr1, arr2) { 
//     if(arr1 == null || arr2 == null) return false
//     if(!arr1.length && !arr2.length) return true

//     if(arr1.length !== arr2.length) return false

//     for(let i = 0; i < arr1.length; i++) {
//        if(arr1[i] !== arr2[i]){
//         return false
//        }
//     }

//     return true
// }

// // test 
// const arr1 = [1,2,3,4]
// const arr2 = [1,2,3,4]
// const res = compareIfArrIsEqual(arr1, arr2)
// console.log('res', res); // res true

// 2） JSON.stringify() 
function arrayEqual(arr1, arr2){
    return JSON.stringify(arr1) === JSON.stringify(arr2)
}

const arr1 = [1,2,3,9]
const arr2 = [1,2,3,4]
const res = arrayEqual(arr1, arr2)
console.log('stringify',JSON.stringify(arr1)); // '[1,2,3,9]' 转为字符串形式
console.log('res',res); // res false