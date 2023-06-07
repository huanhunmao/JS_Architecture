// es5 class 构造函数 
function Animal(name){
    // 属性  分为共有属性 在 prototype上的  和实例上的属性 
    this.name = name 
    this.arr = [1,2,3]
}

Animal.prototype.address = {
    location: 'xian'
}
const animal1 = new Animal('小鸡')
const animal2 = new Animal('小猪')

console.log(animal1.arr === animal2.arr) // false
console.log(animal1.address === animal2.address) // true prototype 上的共有属性

// 每个实例上 都有一个 __proto__
console.log(animal1.__proto__ === Animal.prototype) // true
console.log(animal1.constructor === Animal) // true 

console.log(Animal.__proto__ === Function.prototype) // true
console.log(animal1.__proto__.__proto__ === Object.prototype) // true
console.log(Object.__proto__) // {}
console.log(Object.prototype.__proto__) // null

console.log(Function.prototype.__proto__ === Object.prototype) // true

console.log(animal1.address.__proto__)