// 统计次数 
function after(times, callback){
    return function() {
        if(--times === 0){
            callback();
        }
    }
}

let newFn = after(3, function(){
    console.log('after 3 times')
})

newFn() // ''
newFn() // ''
newFn() // after 3 times
newFn() // after 3 times ， 调用3次后每次调用都会执行