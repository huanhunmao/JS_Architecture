class Animal {
    static flag () {
        return 123
    }
    constructor(name) {
        this.name = name;
        this.eat = '吃肉'
    }
    say () {
        console.log('嗷嗷嗷')
        console.log(this)
    }
}

// const animal = new Animal('ppx')
// // animal.say() // 嗷嗷嗷   但如果打印say 内的 this 结果是啥  Animal { name: 'ppx', eat: '吃肉' }
// // console.log(Animal.flag()); // 123 静态属性

// class Tiger extends Animal {

// }

// const tiger = new Tiger('ppc')
// // 嗷嗷嗷
// // Tiger { name: 'ppc', eat: '吃肉' }
// tiger.say()

// // 静态方法也会被继承 
// console.log(Tiger.flag()); // 123


// 上面传递可以使用 constructor + super 复杂化了 没必要 

class Tiger extends Animal {
    constructor(name) {  // 此处相当于 Animal.call(this, name)
        super(name);
    }
}

const tiger = new Tiger('ppc')
// 嗷嗷嗷
// Tiger { name: 'ppc', eat: '吃肉' }
tiger.say()