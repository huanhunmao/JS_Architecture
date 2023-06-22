// function currying 柯里化
// function multiply(a,b){
//     return a * b;
// }

// let multiplyByTwo = multiply.bind(this,3)
// console.log(multiplyByTwo);         // [Function: bound multiply]
// console.log(multiplyByTwo(10));     // 30

function multiply(a,b,c){
    return a * b * c;
}

let multiplyByTwo = multiply.bind(this,3)
console.log(multiplyByTwo);         // [Function: bound multiply]
console.log(multiplyByTwo(10,33));   // 990