// 缓存接口数据 避免多次请求 

// 缓存对象 
const cache = {};
function fetchDataFromBackend(endpoint){
    if(cache[endpoint]){
        console.log('data from cache');
        return cache[endpoint];
    }

    const data = 'ppx'
    cache[endpoint] = data 
    console.log('data from backend',  cache[endpoint]);
    return data
}


// data from backend ppx
// data1 ppx
// data from cache ppx  第二次获取时 有 直接读缓存 
// data2 ppx
const data1 = fetchDataFromBackend('AA')
console.log('data1',data1);
const data2 = fetchDataFromBackend('AA')
console.log('data2',data2);