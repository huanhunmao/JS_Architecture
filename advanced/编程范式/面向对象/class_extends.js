// class 继承  如果我要创造 很多的 角色 如何操作 
class  Character{
    constructor(name, weapon){ // new 之后 会立即调用 constructor 函数
        this.name = name;
        this.weapon = weapon;
    }

    attack(){ // 即使很多人 调用 也只是调用 一处内存空间的内容
        console.log(`attack with ${this.weapon}`);
    }
}

class Elf extends Character{
    constructor(name, weapon,type){ 
        super(name, weapon);
        this.type = type
    }

    build(){
        console.log(`${this.name} can build`);
    }
}

const ppx = new Elf('ppx', 'cloth', 'small')
ppx.attack(); // attack with cloth
ppx.build(); // ppx can build

class Rude extends Character{
    constructor(name, weapon,type){ 
        // console.log('this1',this) // error super 前没有 this
        super(name, weapon);
        console.log('this2',this) // this2 Rude { name: 'kk', weapon: 'fire' }
        this.type = type
        console.log('this3',this) // this3 Rude { name: 'kk', weapon: 'fire', type: 'big' }
    }

    fight(){
        console.log(`${this.name} can fight`);
    }
}


const kk = new Rude('kk', 'fire','big')
kk.attack(); // attack with fire
kk.fight();  // kk can build

console.log('kk.__proto__', kk.__proto__); // Character {}

// 看原型关系 
console.log(Elf.isPrototypeOf(Character)); // false
console.log(Character.isPrototypeOf(Elf)); // true

console.log(Rude.isPrototypeOf(Elf)); // false
console.log(Character.isPrototypeOf(Rude)); // true

// 另一种方法 instanceof 这个是实例关系
console.log(ppx instanceof Rude); // false
console.log(ppx instanceof Elf); // true
console.log(ppx instanceof Character); // true