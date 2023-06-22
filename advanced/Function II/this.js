// 1) this is the object that the function is a property of 

// Why need this ?
// 1) give methods access to their object  使得方法可以拿到对象上的属性
// 2) execute same code for multiple objects 简化执行相同的代码

// const obj = {
//     name: 'ppx',
//     sing(){
//         console.log(`hahaha from ${this.name}`);
//     },
//     // or
//     // sing: function(){
//     //     console.log(`hahaha from ${this.name}`);
//     // }
//     // sing: () => {
//     //     console.log(`hahaha from ${this.name}`); // undefined  equals window.name
//     // }
// }

// obj.sing() // hahaha from ppx

// 2) 
// bad code 
// const obj = {
//     name: 'ppx',
//     sing(){
//         console.log(`hahaha from ${this.name}`);
//     },
//     singAgain(){ // this is bad code , because it is repeated
//         console.log(`hahaha from ${this.name} + '~!'`);
//     },
// }

// obj.singAgain() // hahaha from ppx + '~!'

// // good code 
// const obj = {
//     name: 'ppx',
//     sing(){
//         console.log(`hahaha from ${this.name}`);
//     },
//     singAgain(){ 
//         console.log(`${this.sing()}+ '~!'`); 
//     },
// }

// obj.singAgain() // hahaha from ppx + '~!'


// 3) 
function goodName(){
    console.log(this.name);
}

const name = 'ppx'

const obj1 = {
    name: 't1',
    goodName
}

const obj2 = {
    name:'blg',
    goodName
}

goodName() // undefined
obj1.goodName() // t1
obj2.goodName() // blg