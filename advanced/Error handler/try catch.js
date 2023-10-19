// 抛出错误是 js 特征  要做的是 不让整个应用停止 而是只是停止局部(捕获错误)

// try {
//     console.log('work well');
// } catch (err) {
//    console.log('something went wrong', err);
// }


// 还可以嵌套 看看是哪一层的问题
// try{
//     try{
//         console.log('object');
//     }catch (err) {
//         console.log('inner error', err);
//     }
// }catch (err) {
//     console.log('outer error', err);
// }


// 但是 无法 捕获异步错误 
try{
    setTimeout(() => {
        throw new Error()
    },1000)
}catch(e){
    console.log('something went wrong', e);
}

