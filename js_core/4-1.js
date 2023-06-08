
function Animal(name){
    // 属性分为实例上的属性和 共有属性（prototype 上的）
    // static 静态属性 可继承 不过挂在 类上 而不是 方法上
    this.name = name;
    this.like = 'meat'
}
Animal.prototype.address = {location: '深山老林'}

function Tiger(name){
    this.name = name
    this.age = 3
    Animal.call(this)
}
Tiger.prototype.say = function(){
    console.log('嗷嗷嗷');
}

// // 继承父类实例上的属性 
// let tiger = new Tiger()
// console.log(tiger.like); // meat

// 错误的写法 
// Tiger.prototype = Animal.prototype; // 确实可以拿到 Animal上的属性 但自己原型属性拿不到了
// let tiger = new Tiger()
// console.log(tiger.like);  // meat
// console.log(tiger.address); // { location: '深山老林' }
// console.log(tiger.say());  // error

// 正确的 
// Tiger.prototype.__proto__ = Animal.prototype
// Tiger.prototype = Object.create(Animal.prototype) //会丢失自己原型的方法
let tiger = new Tiger()
console.log(tiger.like);  // meat
console.log(tiger.address); // { location: '深山老林' }
console.log(tiger.say()); // 嗷嗷嗷

// 实现一下 Object.create
function create(parentPrototype){ 
    let Fn = function(){}
    Fn.prototype = parentPrototype
    return new Fn()
}