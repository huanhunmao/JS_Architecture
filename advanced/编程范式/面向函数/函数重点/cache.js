// 没有缓存时
function addTo66(num){
    console.log('take a long time');
    console.log(num + 66);
}

// 重复 了 多次 非常 瓜怂 
// addTo66(22)  // take a long time 88
// addTo66(22)  // take a long time 88
// addTo66(22)  // take a long time 88


// 添加缓存时 
let cacheRes = {}
function cacheAddTo66(num){
    if(num in cacheRes){
        console.log(cacheRes[num]);
    }else{
        console.log('take a long time');
        cacheRes[num] = num + 66;
    }
}


cacheAddTo66(11) // take a long time 执行了一次 第一次 没有结果时 计算  后续 使用缓存的结果 
cacheAddTo66(11)
cacheAddTo66(11)

// 当缓存变更时 重新计算 
cacheAddTo66(33) // take a long time
cacheAddTo66(33) // 99


