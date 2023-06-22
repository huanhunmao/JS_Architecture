// 练习
const array = [1,2,3];
 
function getMaxNumber(arr){
  //code here  
//   1) apply 
//   return Math.max.apply(this, array); 

// 2) reduce
// const val = arr.reduce(function(acc, cur) {
//     // console.log('acc',acc); // 0  1  2 
//     // console.log('cur',cur); // 1  2  3

//     // if(cur > acc) acc = cur
//     // return acc
    
//     // or
//     if(cur > acc) return cur
//     },0)

//     return val

    // 3) for 
    let res = 0 
    for(let i = 0; i < array.length; i ++){
        if(array[i] > res){
            res = array[i];
        }
    }
    return res
}
 
const res = getMaxNumber(array) // should return 3\
console.log('res',res);