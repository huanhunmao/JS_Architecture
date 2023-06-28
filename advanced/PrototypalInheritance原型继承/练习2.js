// 1) 改造 map 使得返回的值 都带一个🗺️
// Array.prototype.map = function(){
//     let res = ''
//     for(let i = 0; i < this.length; i ++){
//         res += this[i] + '🗺️' + ','
//     }
//     return res
// }

// console.log([1,2,3].map(item => item)); // '1🗺️','2🗺️','3🗺️',

// 2) 如果返回还是想要数组 并且都带 🗺️咋办 
Array.prototype.map = function(){
    let arr = []
    for(let i = 0; i < this.length; i ++){
        arr.push((this[i] + '🗺️'))
    }
    return arr
}


console.log([1,2,3].map(item => item)); // [ '1🗺️', '2🗺️', '3🗺️' ]