// func has this and arguments 
// function test(){
//     console.log('this', this);
//     console.log('arguments',arguments);
// }

// test()
// const numberFour = new Function('num1','num2', 'return num1 + num2 + 1')

// console.log(numberFour(4,5)); // 10

// func is special object 
function test(){
    console.log('test');
}

test.value = 'hahahaha'

console.log('test', test); // [Function: test] { value: 'hahahaha' } 

// 类似于这个
const specialObj = {
    value: "hahahaha",
    name: "test",
    return: console.log('test')
}