// 比如 当前多个并发请求， 如何确保都完成后执行 某个函数 

let fs = require('fs')

function after(times, callback){
    let obj = {}
    return function(key, data){
        obj[key] = data
        if(--times === 0){
            callback(obj)
        }
    }
}

let newFn = after(2, function(res){
    console.log('res',res); // 并发数据都准备好 才打印 res { name: 'ppx', age: '10' }
})

fs.readFile('./js_core/promise/name.txt','utf-8', function(err, data){
    if(err) throw err
    setTimeout(function(){ // 即使这个 很慢 也没关系 
        newFn('name', data)
    },3000)
})

fs.readFile('./js_core/promise/age.txt', 'utf-8',function(err, data){
    if(err) throw err
    newFn('age', data)
})