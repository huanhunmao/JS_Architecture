// 通过 console /  debugger 来打印
const flattened = [[0,1],[2,3],[4,5]].reduce((a,b) => a.concat(b),[])
console.log(flattened); // [ 0, 1, 2, 3, 4, 5 ]