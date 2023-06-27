// 封装变量和私有化数据

// createCounter 函数返回了一个内部函数，该内部函数可以访问和更新 count 变量。
// 由于外部环境无法直接访问 count，它被封装在闭包中，从而实现了私有化的效果
// function createCounter(){
//     let count = 0   

//     return function(){
//         count ++ 
//         console.log(count);
//     }
// }

// const counter = createCounter()
// counter() // 1 
// counter() // 2
// counter() // 3


// 再来一个
const handleExplodeButton = () => {
    let initTime = 0 
    const passTime = () => initTime ++ 
    const totalTime = () => initTime

    const lunch = () => {
        initTime = -1 
        return '💥💥💥'
    }
    setInterval(passTime, 100)

    return {
        lunch,
        totalTime
    }
}

const button = handleExplodeButton()
button.totalTime() // 0
button.totalTime() // 94
button.totalTime() // 103

button.lunch() // '💥💥💥'