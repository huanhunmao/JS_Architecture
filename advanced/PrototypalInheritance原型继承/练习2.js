// 改造 map 使得返回的值 都带一个🗺️
Array.prototype.map = function(){
    let res = ''
    for(let i = 0; i < this.length; i ++){
        res += this[i] + '🗺️' + ','
    }
    return res
}

console.log([1,2,3].map(item => item));