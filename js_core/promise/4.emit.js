// 发布 on 订阅 emit 模式 

let fs = require('fs')

// function EventEmitter(){
//     this._arr = []
// }

// EventEmitter.prototype.on = function(callback){ // 订阅
//     this._arr.push(callback)
//     console.log('_arr', this._arr); // [fn,fn,...]  _arr [ [Function (anonymous)], [Function (anonymous)] ]
// }

// EventEmitter.prototype.emit = function(){ // 发布
//     this._arr.forEach(fn => fn.apply(this,arguments)) // 依次执行 _arr 里的方法
// }

// let e = new EventEmitter()
// let res = {}
// e.on(function(){
//     console.log('一个接口成功');
// })
// e.on(function(key, data){
//     res[key] = data
//     if(Object.keys(res).length === 2){
//         console.log('res',res); // res { age: '10', name: 'ppx' }
//     }
// })

fs.readFile('./js_core/promise/name.txt','utf-8', function(err, data){
    if(err) throw err
    e.emit('name',data)
})

fs.readFile('./js_core/promise/age.txt', 'utf-8',function(err, data){
    if(err) throw err
    e.emit('age',data)
})