// 为了不重复计算 

const cacheData = (function () {
    const cache = {}

    return  function fib(n){
        if(n in cache) return cache[n]
        if(n <= 1) return n

        cache[n] = fib(n-1) + fib(n-2)
        return cache[n]
    }
})() 

console.log('cacheData',cacheData(10)); // 55