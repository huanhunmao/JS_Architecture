// // 1） 无法克隆函数
// const obj = {
//     a:1,
//     b:{c(){return 111}}
// }

// const clone  = structuredClone(obj) // error

// obj.b = 'xxxx'
// console.log('obj', obj);
// console.log('clone',clone);

// 2） 无法克隆 Error 对象和 DOM 节点
// const error = new Error('Has wrong')

// try{
//     const clone  = structuredClone(error)
//     console.log('clone', clone);
// }catch(err){
//     console.log(err);
// }

// 3）丢弃了对象的原型链和方法 
class Person{
    constructor(name){
        this.name = name
    }

    // prototype 上的方法
    sayHello(){
        console.log(`${this.name} say hello`);
    }
}

const person = new Person('ppx')

const clone  = structuredClone(person) 

console.log('clone', clone.name);
console.log('clonePerson', clone instanceof Person); 
clone.sayHello(); // Uncaught TypeError: clone.sayHello is not a function at <anonymous>:18:7