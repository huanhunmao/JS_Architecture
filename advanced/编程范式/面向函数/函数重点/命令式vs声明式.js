// Imperative（命令式）编程
const arr = [1,2,3]
let res = 0

for(let i = 0; i < arr.length;i ++){
    res += arr[i]
}

console.log('res',res) // res 6



// Declarative（声明式）编程
const arr1 = [2,3,4]
const res1 = arr1.reduce((acc,curr) => acc + curr , 0)

console.log('res1',res1) // res 9