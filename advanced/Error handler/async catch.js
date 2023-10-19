// 1 promise catch   使用比较复杂 
Promise.resolve('asyncfail')
    .then(response => {
        // throw new Error('#1 has error')
        // return response
        Promise.resolve().then(() => {
            throw new Error('#3 has error')
        }).catch(err => {
            console.log(err);
        })
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
    .then(response => {
        throw new Error('#2 has error')
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })


// 2 异步错误捕获  async await + try catch 更加简化
async function someFunc(){
    try{
       const res = await someApi()
        console.log(res);
    }catch(e){
        console.log('error',e);
    }finally{
        console.log('finally do something');
    }
}


// 其他回调函数  error-first
someAsyncFunctionWithCallback((error, result) => {
    if(error){
        console.log('has error', error);
        return 
    }

    console.log(result);
})


// 事件驱动错误  nodejs
const stream = getSomeStream()
stream.on('error',error => {
    console.log('has error', error);
})