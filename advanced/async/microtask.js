// 1
setTimeout(() => {console.log('1')},0)
setTimeout(() => {console.log('2')},10)

// 2
Promise.resolve('hi promise').then(data => console.log('2',data))

// 3 
console.log('3', 'is sync');
// 3 is sync
// 2 hi promise
// 1
// 2