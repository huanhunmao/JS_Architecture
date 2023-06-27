// 闭包对 内存效率 提升的作用 
// 1) wrong code 
// function test(index){
//     const bigArr = new Array(10000).fill('😂');
//     console.log('created !');
//     console.log(bigArr[index]); 
// }

// // created ! 执行了 3 次 为了查找 数组内的量 多次创建数组消耗内存
// test(999)
// test(88)
// test(3)

// 2）利用闭包解决这个问题，只创建一次 
// function test(){
//     const bigArr = new Array(10000).fill('😂');
//     console.log('created again!');
//     return function(index) {
//         console.log(bigArr[index]);
//     }
// }

// const val = test() // created again! 即使多次调用，函数只执行了一次 
// val(999)
// val(88)
// val(3)

// 再来一个 
function createAdder(initialValue){
    return function(number){
        initialValue += number;
        console.log(initialValue);
    }
}

const adder = createAdder(3)
adder(5) // 8

// createAdder 函数返回了一个内部函数，该内部函数可以访问和修改 initialValue 变量。
// 每次调用 adder 函数时，它都会保持对外部状态的记忆，并在之前的基础上进行累加