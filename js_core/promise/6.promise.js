// promise 用法和 最简单写法 
// promise status  pending fulfilled rejected
// pending -> fulfilled 
// pending -> rejected
// fulfilled rejected 不可互相转化
// new Promise(function(fulfilled, rejected) executor
// 每个 promise 都有一个 then 方法 

function myPromise(executor){
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallback = []
    this.onRejectedCallback = []
    
    let self = this
    function resolve(val){
        if(self.status === 'pending'){
            self.value = val
            self.status = 'fulfilled'
            self.onResolvedCallback.forEach(fn => fn())
        }
    }
    
    function reject(reason){
        if(self.status === 'pending'){
        self.reason = reason
        self.status = 'rejected'
        self.onRejectedCallback.forEach(fn => fn())
        }
    }

    try{
        executor(resolve, reject)
    }catch(err){
        reject(err) // fail
    }
}

myPromise.prototype.then = function(onFulfilled, onRejected){
    let self = this

    if(self.status === 'fulfilled'){
        onFulfilled(self.value)
    }

    if(self.status === 'rejected'){
        onRejected(self.reason)
    }

    if(self.status === 'pending'){
        this.onResolvedCallback.push(function(){
            onFulfilled(self.value)
        })
        this.onRejectedCallback.push(function(){
            onRejected(self.reason)
        })
    }
}

let promise = new myPromise(function(resolve, reject){
    setTimeout(function(){
        resolve('ppx good');
    },1000)
    // reject('ppx bad');
    // throw new Error('报错了')
})

promise.then(function(val){
    console.log(val,'success'); // ppx good success 不会继续执行 因为 状态已经从 pending -> resolved
},
function(err){
    console.log(err,'fail');
})

promise.then(function(val){
    console.log(val,'success'); // ppx good success 不会继续执行 因为 状态已经从 pending -> resolved
},
function(err){
    console.log(err,'fail');
})
promise.then(function(val){
    console.log(val,'success'); // ppx good success 不会继续执行 因为 状态已经从 pending -> resolved
},
function(err){
    console.log(err,'fail');
})
