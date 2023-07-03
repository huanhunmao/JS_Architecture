// 上面的例子有点不好 在于  添加了一个变量到全局  能不能解决这个事情 放在内部 
// 添加缓存时  使用闭包  内部函数保持对外部变量 cacheRes 的引用 

function cacheAddTo66(num){
    let cacheRes = {}
    return function(){
        if(num in cacheRes){
            console.log(cacheRes[num]);
        }else{
            console.log('take a long time');
            cacheRes[num] = num + 66;
        }
    }
}

const res = cacheAddTo66(99)
res() // take a long time
res() // 165
res() // 165