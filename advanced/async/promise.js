// 1 使用 promise 
// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums',
// ]

// Promise.all(urls.map(url => { //  可以拿到结果 
//     return fetch(url).then(resp => resp.json())
// })).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// }).catch(() => console.log('error'))


// 2 promise 基本样子 
//  pending  fulfilled  rejected  三种
// 如果没有错误 执行then 包含 catch 之后的 then 
// 如果出现错误 直接到 catch  then 不执行
// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve('Stuff Worked')
//     }else{
//         reject('Error, it is broken')
//     }
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100,'HIII')
// })

// promise
// .then(result => result + '!')
// .then(result2 => result2 + '?')
// .catch(() => console.log('error'))
// .then(result3 => console.log(result3 + 'ppx')) // Stuff Worked!?ppx


// 3 promise all 
// const promise = new Promise((resolve, reject) => {
//     if(true){
//         resolve('Stuff Worked')
//     }else{
//         reject('Error, it is broken')
//     }
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'HIII')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Rookie')
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'The shy')
// })

// Promise.all([promise, promise2, promise3, promise4])
// .then(values => {console.log(values)})  // ['Stuff Worked', 'HIII', 'Rookie', 'The shy']