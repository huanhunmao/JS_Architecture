// // 如果现在 要创造 1000 个小精灵对象 怎么做 ？ 

// // 1） 非常瓜怂的方式 一个一个写 
// const firstOne = {
//     name:'ppx',
//     weapon: 'fire',
//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }

// console.log(firstOne.name); // ppx
// console.log(firstOne.weapon); // fire
// console.log(firstOne.attack()); // attack with fire

// // 如果是第二个 就再复制粘贴一遍 
// const secondOne = {
//     name:'kk',
//     weapon: 'water',
//     attack(){
//         return 'attack with ' + this.weapon
//     }
// }

// console.log(secondOne.name);  // kk
// console.log(secondOne.weapon);  // water
// console.log(secondOne.attack()); // attack with water

// // 如果有 1000个 怎么操作 ？  继续？ 非常瓜皮 




// // 2） 比较好点的 使用 工厂函数  
// // 但问题是 如果有 1000 个 则需要重复 attack  有没有更好的办法 
// function createEle(name, weapon){
//     return {
//         name,
//         weapon,
//         attack(){
//             return 'attack with ' + weapon
//         }
//     }
// }

// const ppx = createEle('ppx', 'dance')
// console.log(ppx.name); // ppx
// console.log(ppx.weapon); // dance
// console.log(ppx.attack()); // attack with dance

// const kkp = createEle('kkp', 'fight')
// console.log(kkp.attack()); // attack with fight


// // 插曲  先试一下  Object.create() 作用 
// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
//   me.name = "John";
//   me.isHuman = true;
  
//   me.printIntroduction(); // 输出: My name is John. Am I human? true
//   // me__proto__ = person 
//   console.log('What is my prototype',Object.getPrototypeOf(me)); // person



// 3-1） 先不使用 Object.create() 试试简化这个事情  也是有些僵硬 
// const attackFunc = {
//         attack(){
//         return 'attack with ' + this.weapon
//     }
// }
// function createEle(name, weapon){
//     return {
//         name,
//         weapon,
//     }
// }

// const ppx = createEle('ppx', 'dance')
// ppx.attack = attackFunc.attack
// console.log(ppx.attack()); // attack with dance

// const kk = createEle('kk', 'fight')
// kk.attack = attackFunc.attack
// console.log(kk.attack()); // attack with fight




// 3-2） 使用 Object.create() 简化这个事情  createEle 自身没有 attack 这个方法 但原型上attackFunc 有 
// const attackFunc = {
//     attack(){
//     return 'attack with ' + this.weapon
// }
// }
// function createEle(name, weapon){
//     const newEle = Object.create(attackFunc)
//     newEle.name = name,
//     newEle.weapon = weapon

//     return newEle
// }

// const ppx = createEle('ppx', 'dance')
// console.log(ppx.attack()); // attack with dance

// const kk = createEle('kk', 'fight')
// console.log(kk.attack()); // attack with fight


// 4) 使用构造函数 + prototype 解决  
// function Elf(name, weapon){
//     this.name = name
//     this.weapon = weapon
// }

// Elf.prototype.attack = function(){
//     return 'attack with ' + this.weapon
// }

// const ppx = new Elf('ppx', 'dance') //  new 创建新对象 将新对象 指向构造函数（原型）
// console.log('ppx type', typeof ppx); // ppx type object
// console.log(ppx.__proto__); // Elf.prototype { attack: [Function (anonymous)] }
// console.log(Elf.prototype); // Elf.prototype { attack: [Function (anonymous)] }


// console.log(ppx.name);
// console.log(ppx.weapon);
// console.log(ppx.attack()); // attack with dance

// const kk = new Elf('kk', 'pua')
// console.log(kk.attack()); //  attack with pua

// 4-1） 这种 不是最好的 再添加一个 方法 

function Elf(name, weapon){
    this.name = name
    this.weapon = weapon
}

Elf.prototype.attack = function(){
    return 'attack with ' + this.weapon
}
// Elf.prototype.build = function(){ // 这样无法调用 build 因为函数内 this 没有别人调用时 默认指向 window
//     function build(){
//         return `${this.name} build a house`
//     }

//     return  build()
// }

// 方法 1 解决
Elf.prototype.build = function(){  // console.log(kk.build()); kk build a house
    const self  = this
    function build(){
        return `${self.name} build a house`
    }

   return  build()
}

// 方法 2 解决
Elf.prototype.build = function(){ // console.log(kk.build()())  kk build a house
    function build(){
        return `${this.name} build a house`
    }

   return  build.bind(this)
}


// 方法 3 解决
Elf.prototype.build = function(){ // console.log(kk.build())  kk build a house
    const  build = () =>{
        return `${this.name} build a house`
    }

   return  build()
}

const kk = new Elf('kk', 'pua')
console.log(kk.attack()); //  attack with pua