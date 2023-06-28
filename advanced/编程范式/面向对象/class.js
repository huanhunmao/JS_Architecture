// 简化上面那个问题 不再 直接添加到 prototype 上 
class  Elf{
    constructor(name, weapon){ // new 之后 会立即调用 constructor 函数
        this.name = name;
        this.weapon = weapon;
    }

    attack(){ // 即使很多人 调用 也只是调用 一处内存空间的内容
        console.log(`attack with ${this.weapon}`);
    }
}

const ppx = new Elf('ppx', 'water')
console.log(ppx.name); // ppx
ppx.attack(); // attack with water

const kk = new Elf('kk', 'fire')
console.log(kk.name); // kk
kk.attack(); // attack with fire

// 为啥 不直接 在 js 内创一个 class 而不是 利用原型来实现， 创造时 考虑到即要有 java 的一些特征 但又要区别于 java 